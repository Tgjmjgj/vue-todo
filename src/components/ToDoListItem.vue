<template>
  <li>
    <span v-if="number"> {{ number }} </span>
    <slot class="content"></slot>
    <base-icon-button icon="pen"></base-icon-button>
    <base-icon-button icon="times"></base-icon-button>
  </li>
</template>

<script>
export default {
  name: 'todo-list-item',
  props: {
    number: Number,
  },
};
</script>

<style scoped>

</style>
