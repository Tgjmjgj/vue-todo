<template>
  <v-card flat tile>
    <v-toolbar flat color="primary" class="white--text">
      <v-toolbar-title class="pl-5">So what we need to do?</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="pa-0">
      <to-do-list class="todo-list"></to-do-list>
    </v-card-text>
  </v-card>
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
