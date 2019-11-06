<template>
  <div class="box">
    <to-do-list :limit=2 class="todo-list"></to-do-list>
  </div>
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

<style scoped>
.box {
  display: flex;
  justify-content: center;
}

.todo-list {
  box-sizing: border-box;
  width: 800px;
  background: #e0e3e6;
  margin-top: 6em;
  border-radius: 8px;
  padding: 1em;
}

@media (max-width: 1000px) {
  .todo-list {
    width: 80%;
  }
}

@media (max-width: 700px) {
  .todo-list {
    width: calc(700px * 0.8);
  }
}
</style>
