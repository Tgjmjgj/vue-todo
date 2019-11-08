<template>
  <div class="editor">
    <div class="editor-header">
      <base-header
        class="head-text"
        :level=2
        value="Edit Card"
      ></base-header>
    </div>
    <div class="editor-content">
      <base-editable-div
        class="edit-head"
        v-model="header"
        :placeholder="isLoaded ? 'Title' : 'Loading...'"
        :lock="!isLoaded"
      ></base-editable-div>
      <base-editable-div
        class="edit-main"
        v-model="content"
        :placeholder="isLoaded ? 'Write something about to do...' : 'Loading...'"
        :lock="!isLoaded"
      ></base-editable-div>
    </div>
    <div class="editor-controls">
      <base-classic-button
        class="button save"
        :class="isLoaded ? 'active' : 'blocked'"
        value="Save"
        @click="save"
      ></base-classic-button>
      <base-classic-button
        class="button cancel"
        :class="isLoaded ? 'active' : 'blocked'"
        value="Cancel"
        @click="cancel"
      ></base-classic-button>
    </div>
  </div>
</template>

<script>
import { pathto, ITEM_UPDATE } from '@/store/names';
import throttleIf from '@/util/dev/throttle';

export default {
  name: 'todo-list-rich-editor',
  data() {
    return {
      header: '',
      content: '',
      item: null,
    };
  },
  computed: {
    items() {
      return this.$store.getters[pathto('items')];
    },
    isLoaded() {
      return this.$store.getters.isLoaded;
    },
  },
  methods: {
    save() {
      if (this.isLoaded) {
        const updItem = {
          id: this.$route.params.id,
          header: this.header,
          content: this.content,
        };
        this.$store.dispatch(pathto(ITEM_UPDATE), updItem);
        this.$emit('leave');
      }
    },
    cancel() {
      this.$emit('leave');
    },
  },
  mounted() {
    throttleIf(!this.$store.getters.isLoaded)
      .then(() => this.$store.dispatch('waitItemsLoading'))
      .then(() => {
        const itemId = this.$route.params.id;
        const potentialItem = this.items.find(item => item.id === itemId);
        if (potentialItem) {
          this.item = potentialItem;
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
.editor-header {
  display: flex;
  align-items: flex-start;
}
.head-text {
  margin-left: 2em;
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
.editor-content .locked {
  background: #f6f6f6;
}
.editor-controls {
  display: flex;
  justify-content: flex-start;
}
.editor-controls > button {
  margin: .6em .6em 0 0;
}
.active {
  cursor: pointer;
  background-color: #F5CE67;
  transition: background-color 1s ease-out;
}
.blocked {
  cursor: default;
  background-color: #d6d5d1;
  transition: background-color 1s ease-out;
}
</style>
