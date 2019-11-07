<template>
  <div
    ref="editable"
    contenteditable="true"
    @input="$emit('input', $event.target.innerText)"
    data-placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'base-editable-div',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  watch: {
    value() {
      if (this.value !== this.$refs.editable.innerText) {
        this.$refs.editable.innerText = this.value;
      }
    },
  },
};
</script>

<style scoped>
[contentEditable=true]:empty:before {
  content: attr(data-placeholder);
  color: grey;
  font-style: italic;
}
div {
  outline: none;
}
</style>
