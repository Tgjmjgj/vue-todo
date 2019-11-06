<template>
  <to-do-list :limit=2></to-do-list>
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
