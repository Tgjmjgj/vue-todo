<template>
  <li class="row">
    <div class="main">
      <span v-if="number" class="num"> {{ number }} </span>
      <div class="content">
        <slot></slot>
      </div>
      <base-icon-button class="icon-btn" icon="pen"></base-icon-button>
      <base-icon-button class="icon-btn" icon="times"></base-icon-button>
    </div>
    <div class="append">
      <base-icon-button class="icon-btn" :icon="['far', 'clock']"></base-icon-button>
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

.row {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
  background: #fff;
  margin: 1em 0;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
.row:hover {
  background: #f5f6f7;
}
.main {
  display: flex;
  width: 100%;
}
.num {
  display: inline-block;
  width: 20px;
}
.content {
  display: block;
  text-align: center;
  flex: 1;
}
.icon-btn {
  height: 4em;
  width: 4em;
}
</style>
