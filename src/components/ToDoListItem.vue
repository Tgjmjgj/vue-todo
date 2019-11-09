<template>
  <v-container class="pa-0">
    <v-row class="pa-0">
      <v-col cols="1">
        <span v-if="number" class="num"> {{ number }} </span>
      </v-col>
      <v-col cols="8">
        <div class="text-truncate">
          <slot></slot>
        </div>
      </v-col>
      <v-col cols="1">
        <v-btn
          text icon
          color="black"
          @click="clickEdit"
        >
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn
          text icon
          color="black"
          @click="clickDelete"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn
          text icon
          color="pink"
          @click="clickState"
          :class="currentState"
        >
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

const todoStates = {
  waiting: ['far', 'clock'],
  completed: ['fas', 'check'],
};

export default {
  name: 'todo-list-item',
  props: {
    number: Number,
    currentState: {
      type: String,
      default: 'waiting',
      validator(val) {
        return Object.keys(todoStates).indexOf(val) !== -1;
      },
    },
    item: Object,
  },
  methods: {
    clickEdit() {
      this.$emit('click-edit');
    },
    clickDelete() {
      this.$emit('click-delete');
    },
    clickState() {
      this.$emit('click-state');
    },
  },
  computed: {
    stateIcon() {
      return todoStates[this.currentState];
    },
  },
};
</script>

<style scoped>

.waiting {
  background: #c3c3c3;
}
.completed {
  background: #a4ffa4;
}
</style>
