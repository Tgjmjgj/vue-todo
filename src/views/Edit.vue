<template>
  <v-card flat tile>
    <v-toolbar flat color="primary" class="white--text">
      <v-btn icon class="hidden-xs-only" @click="getOut">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-5">Edit Card</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="pa-0">
      <div class="box">
        <todo-list-rich-editor
          class="editor"
          @leave="getOut"
        ></todo-list-rich-editor>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import ToDoListRichEditor from '@/components/ToDoListRichEditor.vue';

export default {
  name: 'edit',
  data() {
    return {
      prevRoute: null,
    };
  },
  methods: {
    getOut() {
      if (this.prevRoute) {
        this.$router.push({ path: this.prevRoute.path });
      } else {
        this.$router.push({ path: 'page' });
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (to.name === 'edit') {
        // eslint-disable-next-line no-param-reassign
        vm.prevRoute = from;
      }
    });
  },
  components: {
    'todo-list-rich-editor': ToDoListRichEditor,
  },
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.editor {
  box-sizing: border-box;
  width: 800px;
  background: #e0e3e6;
  margin: 6em .75em 6em .75em;
  border-radius: 8px;
  padding: 1em;
}
@media (max-width: 1000px) {
  .editor {
    width: 80%;
  }
}
@media (max-width: 700px) {
  .editor {
    width: calc(700px * 0.8);
  }
}
</style>
