<template>
  <button>
    <base-text value="value"></base-text>
  </button>
</template>

<script>
export default {
  name: 'base-classic-button',
  props: {
    value: String,
  },
};
</script>

<style scoped>
button {
  min-width: 100px;
  min-height: 60px;
  outline: none;
  border: none;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
</style>
