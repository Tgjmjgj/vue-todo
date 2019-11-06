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
      <todo-list-editor :data="editorInput" v-model="editorInput"></todo-list-editor>
      <paginate name="items" :list="items" :per="limit" :refreshCurrentPage="true">
        <todo-list-item
          v-for="(item, indexOnPage) in paginated('items')"
          :key="item.id"
          :number="itemIndex(indexOnPage)"
        >
          <base-text :value="item.header"></base-text>
        </todo-list-item>
      </paginate>
    </div>
    <div class="todo-list-control">
      <paginate-links for="items" :limit="6" :show-step-links="true"></paginate-links>
      <div class="buttons" @click="addCard">
        <base-classic-button
          value="Add Card"
        >
        </base-classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToDoListItem from '@/components/ToDoListItem.vue';
import ToDoListEditor from '@/components/ToDoListEditor.vue';

export default {
  name: 'todo-list',
  data() {
    return {
      paginate: ['items'],
      editorInput: '',
    };
  },
  props: {
    limit: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    ...mapGetters({
      items: 'todoList/items',
    }),
  },
  methods: {
    itemIndex(indexOnPage) {
      return this.paginate.items.page * this.limit + indexOnPage + 1;
    },
    addCard() {
      this.$store.dispatch('todoList/createItem', {
        header: this.editorInput,
        content: '{empty}',
        deleted: false,
        creationTime: new Date(),
      });
      this.editorInput = '';
    },
  },
  components: {
    'todo-list-editor': ToDoListEditor,
    'todo-list-item': ToDoListItem,
  },
};
</script>

<style scoped>

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
  height: 2em;
  width: 2em;
  background: #fff;
  margin: 0.2em;
  box-shadow: 0 1px 2px #666;
}

ul.paginate-links > li:first-child {
  border-radius: 8px 0 0 8px;
  box-shadow: 2px 1px 2px #666;
}

ul.paginate-links > li:last-child {
  border-radius: 0 8px 8px 0;
  box-shadow: -2px 1px 2px #666;
}

</style>
