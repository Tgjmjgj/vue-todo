<template>
  <v-container fluid>
    <v-row>
      <v-col class="pb-0">
        <todo-list-editor
          :disabled="!isLoaded"
          ref="textField"
          v-model="editorInput"
          @enter="addCard"
        ></todo-list-editor>
      </v-col>
    </v-row>
    <v-row class="loader-cont" v-if="!isLoaded">
      <v-col cols="12" class="text-center pt-4 pb-12">
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="pt-0">
        <yes-no-dialog
          ref="delDialog"
          @click:yes="deleteCard"
          caption="Confirm"
          text="Do you confirm the deletion of this Item?"
        ></yes-no-dialog>
        <v-list class="transparent pt-0">
          <v-list-item-group v-model="selectedId" color="blue">
            <v-list-item
              v-for="(item, indexOnPage) in pageItems"
              :key="item.id"
              :value="item.id"
              class="list-item my-2 pa-0"
            >
              <v-hover #default="{ hover }">
                <v-list-item-content class="pa-0">
                    <todo-list-item
                      :number="itemIndex(indexOnPage)"
                      :currentState="item.completionTime ? 'completed' : 'waiting'"
                      :showButtons="hover || (selectedId === item.id)"
                      @click:edit="editCard(item.id)"
                      @click:delete="askToDelete(item.id)"
                      @click:state="changeCardStatus(item)"
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
      <v-col cols="12" md="2" md-order="2" class="d-flex align-center py-0">
        <v-btn
          :disabled="!isLoaded"
          @click="addCard"
          color="primary"
        >Add Card</v-btn>
      </v-col>
      <v-col cols="12" md="10" md-order="1" class="text-center py-0">
        <v-pagination
          :disabled="!isLoaded"
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
import ToDoListItem from '@/components/todo/ToDoListItem.vue';
import ToDoListEditor from '@/components/todo/ToDoListEditor.vue';
import YesNoDialog from '@/components/general/YesNoDialog.vue';

import {
  pathto,
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_DELETE,
} from '@/store/names';
import throttleIf from '@/util/dev/throttle';

// Return or not to the 1st page on item adding
const returnToNewItem = true;

export default {
  name: 'todo-list',
  components: {
    'todo-list-editor': ToDoListEditor,
    'todo-list-item': ToDoListItem,
    'yes-no-dialog': YesNoDialog,
  },
  data() {
    return {
      currentPage: 1, // from 1, not 0 ! That's how v-pagination works
      editorInput: '',
      selectedId: '',
    };
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
        const n = parseInt(this.$route.params.n, 10);
        if (Number.isInteger(n) && n > 0 && n <= this.total) {
          this.currentPage = n;
        }
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
        this.selected = null;
      }
      const pag = this.$el.querySelector('.paginator');
      this.$vuetify.goTo(pag);
    },
    addCard() {
      if (this.isLoaded) {
        if (this.$refs.textField.validate()) {
          this.$store.dispatch(pathto(ITEM_CREATE), {
            header: this.editorInput,
            content: '{empty}',
          });
          this.$refs.textField.reset();
          if (returnToNewItem) {
            this.currentPage = 1;
          }
        }
      }
    },
    changeCardStatus(item) {
      const updItem = { ...item };
      updItem.completionTime = (item.completionTime ? null : new Date());
      this.$store.dispatch(pathto(ITEM_UPDATE), updItem);
    },
    askToDelete(itemId) {
      this.$refs.delDialog.showDialog(itemId);
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

<style lang="scss">
.paginator button {
  outline: none;
  user-select: none;
}
</style>
