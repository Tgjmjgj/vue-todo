<template>
  <li>
    <div>
      <span v-if="number"> {{ number }} </span>
      <slot class="content"></slot>
      <base-icon-button icon="pen"></base-icon-button>
      <base-icon-button icon="times"></base-icon-button>
    </div>
    <div>
      <base-icon-button :icon="['far', 'clock']"></base-icon-button>
    </div>
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
