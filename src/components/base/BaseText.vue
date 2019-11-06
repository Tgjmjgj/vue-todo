<template>
  <p>{{ value }}</p>
</template>

<script>
export default {
  name: 'base-text',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
</style>
