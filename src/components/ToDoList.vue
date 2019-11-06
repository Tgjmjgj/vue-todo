<template>
  <div class="todo-list">
    <div class="todo-list-header">
      <base-header :level="2"></base-header>
    </div>
    <div class="todo-list-main">
      <todo-list-editor></todo-list-editor>
      <paginate name="items" :list="items" :per="limit" :refreshCurrentPage="true">
        <todo-list-item
          v-for="(item, indexOnPage) in paginated('items')"
          :key="item.id"
          :number="itemIndex(indexOnPage)"
        >
          <base-text :value="item.header"></base-text>
        </todo-list-item>
      </paginate>
      <paginate-links for="items" :limit="6" :show-step-links="true"></paginate-links>
    </div>
    <div class="todo-list-control">
      <base-classic-button value="Add Card"></base-classic-button>
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
  },
  components: {
    'todo-list-editor': ToDoListEditor,
    'todo-list-item': ToDoListItem,
  },
};
</script>

<style scoped>
</style>
