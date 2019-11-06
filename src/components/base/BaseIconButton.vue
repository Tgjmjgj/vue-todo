<template>
  <button>
    <font-awesome-icon :icon="icon" />
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
            && val.length < 2
            && val.every(el => typeof el === 'string'))
        );
      },
    },
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
