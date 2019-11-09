<template>
  <v-container class="pa-0">
    <v-row class="pa-0 ma-0 flex-nowrap list-item">
      <v-col cols="1" class="pa-0 text-center">
        <span v-if="number" class="num"> {{ number }} </span>
      </v-col>
      <v-col cols="8" class="pa-0">
        <div class="text-truncate">
          <slot></slot>
        </div>
      </v-col>
      <v-col cols="1" class="pa-0 btn-cont">
        <v-btn
          text icon
          color="black"
          @click="clickEdit"
        >
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1" class="pa-0 btn-cont">
        <v-btn
          text icon
          color="black"
          @click="clickDelete"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-col>
      <v-col
        cols="1"
        class="pa-0 btn-cont"
        :class="currentState"
      >
        <v-btn
          text block tile
          class="pa-0"
          color="black"
          @click="clickState"
          style="height: 100%"
        >
          <v-icon>mdi-heart</v-icon>
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

<style lang="scss" scoped>
$height: 2.6rem;

.list-item {
  height: $height;

  .waiting {
    background: #c3c3c3;
  }
  .completed {
    background: #a4ffa4;
  }
  .btn-cont {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    line-height: $height;
  }
}
</style>
