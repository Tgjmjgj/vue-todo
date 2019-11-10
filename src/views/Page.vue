<template>
  <v-container fluid>
    <v-row justify="center" align="start" class="my-10">
      <v-col cols="12" sm="10" class="width-boundary">
        <std-frame>
          <template #header>
            <v-toolbar-title class="pl-5" style="user-select: none">
              So what we need to do?
            </v-toolbar-title>
          </template>
          <template #body>
            <todo-list class="todo-list"></todo-list>
          </template>
        </std-frame>
      </v-col>
    </v-row>
  </v-container>
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

<style lang="scss" scoped>
.width-boundary {
  max-width: 60rem;
}
</style>
