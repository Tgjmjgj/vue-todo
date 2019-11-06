<template>
  <p
    ref="editable"
    contenteditable="true"
    v-on="listeners"
    data-placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'base-editable-div',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
    },
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },
  mounted() {
    this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.innerText);
    },
  },
};
</script>

<style scoped>
[contentEditable=true]:empty:not(:focus):before {
  content: attr(data-placeholder);
  color: grey;
  font-style: italic;
}
</style>
