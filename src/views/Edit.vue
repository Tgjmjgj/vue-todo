<template>
  <std-frame>
    <template #header>
      <v-btn text icon color="white" class="hidden-xs-only" @click="getOut">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class=" pl-5 pl-sm-3" style="user-select: none">
        Edit Card
      </v-toolbar-title>
    </template>
    <template #body>
      <todo-list-rich-editor @leave="getOut"></todo-list-rich-editor>
    </template>
  </std-frame>
</template>

<script>
import StdFrame from '@/components/StdFrame.vue';
import ToDoListRichEditor from '@/components/todo/ToDoListRichEditor.vue';

export default {
  name: 'edit',
  components: {
    'std-frame': StdFrame,
    'todo-list-rich-editor': ToDoListRichEditor,
  },
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
};
</script>
