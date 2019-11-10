<template>
  <std-frame>
    <template #header>
      <v-toolbar-title
        class="pl-5"
        style="user-select: none"
      >
        So what we need to do?
      </v-toolbar-title>
    </template>
    <template #body>
      <todo-list class="todo-list"></todo-list>
    </template>
  </std-frame>
</template>

<script>
import StdFrame from '@/components/StdFrame.vue';
import ToDoList from '@/components/todo/ToDoList.vue';

export default {
  name: 'page',
  components: {
    'std-frame': StdFrame,
    'todo-list': ToDoList,
  },
};
</script>
