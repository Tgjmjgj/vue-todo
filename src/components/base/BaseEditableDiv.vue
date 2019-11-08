<template>
  <div
    ref="editable"
    :contenteditable="!lock"
    v-on="allListeners"
    :data-placeholder="placeholder"
    :class="lock ? 'locked' : ''"
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
    lock: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value() {
      if (this.value !== this.$refs.editable.innerText) {
        this.$refs.editable.innerText = this.value;
      }
    },
  },
  computed: {
    allListeners() {
      const self = this;
      // to work with native event-listeners
      return Object.assign({},
        this.$listeners,
        {
          input(e) {
            self.$emit('input', e.target.innerText);
          },
        });
    },
  },
};
</script>

<style scoped>
div:empty:before {
  content: attr(data-placeholder);
  color: grey;
  font-style: italic;
}
div {
  outline: none;
}
</style>
