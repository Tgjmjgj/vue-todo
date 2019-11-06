<template>
  <h1 v-if="level==1"> {{ value }} </h1>
  <h2 v-else-if="level==2"> {{ value }} </h2>
  <h3 v-else> {{ value }} </h3>
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
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>

</style>
