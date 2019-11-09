<template>
  <to-do-list class="todo-list"></to-do-list>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue';

export default {
  name: 'page',
  components: {
    'to-do-list': ToDoList,
  },
};
</script>
