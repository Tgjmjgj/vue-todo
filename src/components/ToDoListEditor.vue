<template>
  <base-editable-div 
    v-model="value"
    placeholder="placeholder"
  >
  </base-editable-div>
</template>

<script>
export default {
  name: 'todo-list-editor',
  props: {
    placeholder: {
      type: String,
      default: 'Enter a title for this card...',
    },
  },
};
</script>

<style scoped>

</style>
