<template>
  <button>
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  name: 'basic-icon-button',
  props: {
    icon: String,
  },
};
</script>

<style scoped>
button {
  min-width: 60px;
  min-height: 60px;
  outline: none;
  border: none;
}
</style>
