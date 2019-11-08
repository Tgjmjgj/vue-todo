<template>
  <div class="todo-list">
    <div class="todo-list-header">
      <base-header
        :level="2"
        value="So what we need to do?"
      >
      </base-header>
    </div>
    <div class="todo-list-main">
      <todo-list-editor v-model="editorInput"></todo-list-editor>
      <div class="loader" v-if="!itemsLoaded"></div>
      <paginate
        v-else
        ref="paginator"
        name="items"
        :list="items"
        :per="limit"
        :refreshCurrentPage="true"
      >
        <todo-list-item
          v-for="(item, indexOnPage) in paginated('items')"
          :key="item.id"
          :number="itemIndex(indexOnPage)"
          :currentState="item.completionTime ? 'completed' : 'waiting'"
          @click-edit="editCard(item.id)"
          @click-delete="deleteCard(item.id)"
          @click-state="changeCardStatus(item)"
          class="row"
        >
          <base-text :value="item.header"></base-text>
        </todo-list-item>
      </paginate>
    </div>
    <div class="todo-list-control">
      <paginate-links
        v-if="itemsLoaded"
        for="items"
        :limit="6"
        :show-step-links="true"
        @change="onPageChange"
      ></paginate-links>
      <div class="buttons">
        <base-classic-button
          @click="addCard"
          value="Add Card"
        >
        </base-classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoListItem from '@/components/ToDoListItem.vue';
import ToDoListEditor from '@/components/ToDoListEditor.vue';

export default {
  name: 'todo-list',
  data() {
    return {
      paginate: ['items'],
      editorInput: '',
      itemsLoaded: true,
    };
  },
  props: {
    limit: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    this.$store.state.loading.then(() => {
      // Should executes after full list have rendered in the component
      const n = parseInt(this.$route.params.n, 10);
      if (Number.isInteger(n) && n > 0 && n <= this.$refs.paginator.lastPage) {
        this.$refs.paginator.goToPage(n);
      } else {
        this.$refs.paginator.goToPage(1);
      }
    });
  },
  computed: {
    items() {
      return this.$store.getters['todoList/items'];
    },
  },
  methods: {
    itemIndex(indexOnPage) {
      return this.$refs.paginator.currentPage * this.limit + indexOnPage + 1;
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
    },
    addCard() {
      if (this.editorInput !== '') {
        this.$store.dispatch('todoList/createItem', {
          header: this.editorInput,
          content: '{empty}',
        });
        this.editorInput = '';
        this.$refs.paginator.goToPage(1);
      }
    },
    changeCardStatus(item) {
      const updItem = { ...item };
      updItem.completionTime = (item.completionTime ? null : new Date());
      this.$store.dispatch('todoList/updateItem', updItem);
    },
    deleteCard(itemId) {
      this.$store.dispatch('todoList/deleteItem', itemId);
    },
    editCard(itemId) {
      this.$router.push({ path: `/edit/${itemId}` });
    },
  },
  components: {
    'todo-list-editor': ToDoListEditor,
    'todo-list-item': ToDoListItem,
  },
};
</script>

<style scoped>

.row {
  height: 2.5em;
  margin: .6em 0;
}

.todo-list-control {
  display: flex;
  flex-flow: column;
}

.todo-list-control > .buttons {
  display: flex;
  justify-content: flex-start;
}

</style>

<style>
.paginate-links.items {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul.paginate-links > li {
  display: block;
  user-select: none;
  cursor: pointer;
  background: #fff;
  margin: 0.2em;
  box-shadow: 0 1px 2px #666;
}

ul.paginate-links > li.active {
  background: #ff56;
}

ul.paginate-links > li:first-child {
  border-radius: 8px 0 0 8px;
  box-shadow: 2px 1px 2px #666;
}

ul.paginate-links > li:last-child {
  border-radius: 0 8px 8px 0;
  box-shadow: -2px 1px 2px #666;
}

ul.paginate-links a {
  display: block;
  height: 2em;
  width: 2em;
  line-height: 2em;
}

</style>
