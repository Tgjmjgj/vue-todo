<template>
  <base-editable-div
    :value="innerText"
    @input="onInput"
    :placeholder="placeholder"
    class="input"
  >
  </base-editable-div>
</template>

<script>
export default {
  name: 'todo-list-editor',
  model: {
    prop: 'value',
    event: 'input',
  },
  data() {
    return {
      innerText: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: 'Enter a title for this card...',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(val) {
      this.innerText = val;
      this.$emit('input', val);
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
