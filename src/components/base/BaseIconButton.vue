<template>
  <button v-on="$listeners">
    <font-awesome-icon class="fullsize" :icon="icon" />
  </button>
</template>

<script>
export default {
  name: 'basic-icon-button',
  props: {
    icon: {
      validator(val) {
        return (
          typeof val === 'string'
          || (val instanceof Array
            && (val.length === 1 || val.length === 2)
            && val.every(el => typeof el === 'string'))
        );
      },
    },
  },
};
</script>

<style scoped>
button {
  min-width: 40px;
  min-height: 40px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
}

.fullsize {
  height: 100%;
  width: 100%;
}
</style>
