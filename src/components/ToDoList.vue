<template>
  <div class="todo-list">
    <base-header level="2"></base-header>
    <todo-list-editor></todo-list-editor>
    <paginate name="items" :list="items">
      <todo-list-item
        v-for="(index, item) in items"
        :key="item.id"
        number="index"
      >
        <base-text value="item.header"></base-text>
      </todo-list-item>
    </paginate>
    <paginate-links for="items" :limit=10 :show-step-links="true"></paginate-links>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data() {
    return {
      items: [1, 2, 3],
      paginate: ['items'],
    };
  },
};
</script>

<style scoped>

</style>
