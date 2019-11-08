<template>
  <div class="editor">
    <div class="editor-header">
      <base-header
        :level=2
        value="Edit"
      ></base-header>
    </div>
    <div class="editor-content">
      <base-editable-div
        class="edit-head"
        v-model="header"
        placeholder="Title"
      ></base-editable-div>
      <base-editable-div
        class="edit-main"
        v-model="content"
        placeholder="Write something about to do..."
      ></base-editable-div>
    </div>
    <div class="editor-controls">
      <base-classic-button
        class="button save"
        value="Save"
        @click="save"
      ></base-classic-button>
      <base-classic-button
        class="button cancel"
        value="Cancel"
        @click="cancel"
      ></base-classic-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-list-rich-editor',
  data() {
    return {
      header: '',
      content: '',
    };
  },
  computed: {
    items() {
      return this.$store.getters['todoList/items'];
    },
  },
  methods: {
    save() {
      const updItem = {
        id: this.$route.params.id,
        header: this.header,
        content: this.content,
      };
      this.$store.dispatch('todoList/updateItem', updItem);
      this.$emit('leave');
    },
    cancel() {
      this.$emit('leave');
    },
  },
  mounted() {
    this.$store.state.loading.then(() => {
      const itemId = this.$route.params.id;
      const potentialItem = this.items.find(item => item.id === itemId);
      if (potentialItem) {
        this.header = potentialItem.header;
        this.content = potentialItem.content;
      } else {
        this.$router.replace({ path: '/page' });
      }
    });
  },
};
</script>

<style scoped>
.editor {
  display: flex;
  flex-flow: column;
}
.editor-content {
  flex: 1;
  display: flex;
  flex-flow: column;
  background: #fff;
}
.edit-head {
  height: 5em;
  border-bottom: 1px solid #ccc;
}
.edit-main {
  flex: 1;
}
.editor-controls {
  display: flex;
  justify-content: flex-start;
}
.editor-controls > button {
  margin: .6em .6em 0 0;
}
</style>
