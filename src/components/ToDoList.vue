<template>
  <v-container fluid style="background-color: #E0E3E6;" class="px-6">
    <v-row justify="center" class="todo-list-header">
      <v-col cols="12">
        <base-header
          :level="2"
          value="So what we need to do?"
        ></base-header>
      </v-col>
    </v-row>
    <v-row class="loader-cont" v-if="!isLoaded">
      <v-col>
        <bar-loader
          class="loader"
          :loading="true"
          color="#7B3E19"
          :width="140"
          :height="10"
          sizeUnit="px"
        ></bar-loader>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <todo-list-editor
          v-model="editorInput"
        ></todo-list-editor>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-list class="transparent">
          <v-list-item-group v-model="selected" color="blue">
            <v-list-item
              v-for="(item, indexOnPage) in pageItems"
              :key="item.id"
              class="list-item my-2 pa-0"
            >
              <v-hover #default="{ hover }">
                <v-list-item-content class="pa-0">
                    <todo-list-item
                      :number="itemIndex(indexOnPage)"
                      :currentState="item.completionTime ? 'completed' : 'waiting'"
                      :showButtons="hover || (selected === indexOnPage)"
                      @click-state="changeCardStatus(item)"
                    >
                      <span> {{ item.header }} </span>
                    </todo-list-item>
                  <v-divider></v-divider>
                </v-list-item-content>
              </v-hover>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-row class="todo-list-control">
      <v-col cols="12" md="2" md-order="2" class="buttons">
        <base-classic-button
          :class="isLoaded ? 'active' : 'blocked'"
          @click="addCard"
          value="Add Card"
        ></base-classic-button>
      </v-col>
      <v-col cols="12" md="10" md-order="1" class="text-center">
        <v-pagination
          v-model="currentPage"
          class="paginator"
          :length="total"
          :total-visible="5"
          @input="onPageChange"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BarLoader } from '@saeris/vue-spinners';
import ToDoListItem from '@/components/ToDoListItem.vue';
import ToDoListEditor from '@/components/ToDoListEditor.vue';
import {
  pathto,
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_DELETE,
} from '@/store/names';
import throttleIf from '@/util/dev/throttle';

export default {
  name: 'todo-list',
  components: {
    'bar-loader': BarLoader,
    'todo-list-editor': ToDoListEditor,
    'todo-list-item': ToDoListItem,
  },
  data() {
    return {
      currentPage: 1, // from 1, not 0 ! That's how v-pagination works
      editorInput: '',
      selected: null,
    };
  },
  watch: {
    selected() {
      console.log(this.selected);
    },
  },
  props: {
    limit: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    throttleIf(!this.$store.getters.isLoaded)
      .then(() => this.$store.dispatch('waitItemsLoading'))
      .then(() => {
        // Should executes after full list have rendered in the component
        // const n = parseInt(this.$route.params.n, 10);
        // if (Number.isInteger(n) && n > 0 && n <= this.$refs.paginator.lastPage) {
        //   this.$refs.paginator.goToPage(n);
        // } else {
        //   this.$refs.paginator.goToPage(1);
        // }
      });
  },
  computed: {
    items() {
      return this.$store.getters[pathto('items')];
    },
    isLoaded() {
      return this.$store.getters.isLoaded;
    },
    pageItems() {
      return this.items.slice((this.currentPage - 1) * this.limit, this.currentPage * this.limit);
    },
    total() {
      return Math.ceil(this.items.length / this.limit);
    },
  },
  methods: {
    itemIndex(indexOnPage) {
      return (this.currentPage - 1) * this.limit + indexOnPage + 1;
    },
    recieveInput(val) {
      this.editorInput = val;
    },
    onPageChange(to) {
      const newPath = `/page/${to}`;
      if (newPath !== this.$route.path) {
        // sometime potentially unnecessary action?
        this.$router.replace({ path: newPath });
      }
      const pag = this.$el.querySelector('.paginator');
      this.$vuetify.goTo(pag);
    },
    addCard() {
      if (this.isLoaded) {
        if (this.editorInput !== '') {
          this.$store.dispatch(pathto(ITEM_CREATE), {
            header: this.editorInput,
            content: '{empty}',
          });
          this.editorInput = '';
          // this.$refs.paginator.goToPage(1);
        }
      }
    },
    changeCardStatus(item) {
      const updItem = { ...item };
      updItem.completionTime = (item.completionTime ? null : new Date());
      this.$store.dispatch(pathto(ITEM_UPDATE), updItem);
    },
    deleteCard(itemId) {
      this.$store.dispatch(pathto(ITEM_DELETE), itemId);
    },
    editCard(itemId) {
      this.$router.push({ path: `/edit/${itemId}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  cursor: default;
  min-height: 0;
}
</style>
