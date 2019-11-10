<template>
  <v-text-field
    ref="self"
    outlined clearable
    background-color="white"
    :label="label"
    :placeholder="placeholder"
    :hint="hint"
    :value="innerText"
    :disabled="disabled"
    @input="onInput"
    @blur="removeErrorOutline"
    @click:clear="removeErrorOutline"
    @keydown.enter="enter"
    :rules="[() => !!innerText || 'Write something!']"
  ></v-text-field>
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
    label: {
      type: String,
      default: 'New Item',
    },
    placeholder: {
      type: String,
      default: 'What you need to do?',
    },
    hint: {
      type: String,
      default: 'Press Enter to add',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(val) {
      this.$emit('input', val);
    },
    validate() {
      const isValid = this.$refs.self.validate(true);
      if (!isValid) {
        // Preserve red error outiline for 3 seconds
        setTimeout(() => {
          this.$refs.self.reset();
        }, 3000);
      }
      return isValid;
    },
    reset() {
      this.$refs.self.reset();
    },
    removeErrorOutline() {
      if (!this.innerText) {
        this.$refs.self.reset();
      }
    },
    enter() {
      this.$emit('enter');
    },
  },
  watch: {
    value() {
      // to push outer v-model to inner v-model
      this.innerText = this.value;
    },
  },
};
</script>
