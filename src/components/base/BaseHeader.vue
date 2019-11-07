<template>
  <h1 v-if="level==1" v-on="$listeners"> {{ value }} </h1>
  <h2 v-else-if="level==2" v-on="$listeners"> {{ value }} </h2>
  <h3 v-else v-on="$listeners"> {{ value }} </h3>
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
