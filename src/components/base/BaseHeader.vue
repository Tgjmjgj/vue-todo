<template>
  <h1 v-if="level==1"></h1>
  <h2 v-else-if="level==2"></h2>
  <h3 v-else></h3>
</template>

<script>
export default {
  name: 'base-header',
  props: {
    level: {
      type: Number,
      default: 2,
      validator(val) {
        return [1, 2, 3].indexOf(val) !== -1;
      },
    },
  },
};
</script>

<style scoped>

</style>
