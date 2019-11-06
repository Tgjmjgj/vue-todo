<template>
  <todo-list-rich-editor></todo-list-rich-editor>
</template>

<script>
import ToDoListRichEditor from '@/components/ToDoListRichEditor.vue';

export default {
  name: 'edit',
  components: {
    'todo-list-rich-editor': ToDoListRichEditor,
  },
};
</script>
