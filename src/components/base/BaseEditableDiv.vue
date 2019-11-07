<template>
  <div
    contenteditable="true"
    :innerText="value"
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
};
</script>

<style scoped>
[contentEditable=true]:empty:before {
  content: attr(data-placeholder);
  color: grey;
  font-style: italic;
}
</style>
