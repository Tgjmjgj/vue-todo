<template>
  <base-editable-div
    v-model="data"
    placeholder="placeholder"
    class="input"
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
    data: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.input {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgba(0,0,0,.5);
  padding-bottom: 2em;
}
</style>
