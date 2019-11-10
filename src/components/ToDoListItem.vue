<template>
  <v-container class="pa-0 ma-0">
    <v-row class="pa-0 ma-0 flex-nowrap list-item">
      <div class="pa-0 text-center white" style="flex: 0 0 8.33%">
        <span v-if="number" class="num"> {{ number }} </span>
      </div>
      <div class="pa-0 white text-truncate" style="flex-growth: auto; flex-basis: 100%">
        <slot></slot>
      </div>
      <div class="pa-0 btn-cont white d-flex justify-start" style="flex-basis: 20%">
        <v-slide-x-reverse-transition>
          <div v-if="showButtons"
            class="transition-slow-in-fast-out d-flex flex-nowrap"
          >
            <v-btn
              text icon
              color="black"
              @click="clickEdit"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              text icon
              color="black"
              @click="clickDelete"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-slide-x-reverse-transition>
      </div>
      <div
        class="pa-0 btn-cont white"
        :class="currentState"
        style="flex: 0 0 18.33%; max-width: 100px"
      >
        <v-btn
          text block tile
          class="pa-0"
          :class="currentState"
          color="black"
          @click.stop="clickState"
          style="height: 100%; min-width: 42px;"
        >
          <v-icon> {{ stateIcon }} </v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>

const todoStates = {
  waiting: 'mdi-clock-outline',
  completed: 'mdi-check-bold',
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
    showButtons: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickEdit() {
      this.$emit('click:edit');
    },
    clickDelete() {
      this.$emit('click:delete');
    },
    clickState() {
      this.$emit('click:state');
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

  .invisible {
    width: 0;
    overflow: hidden;
  }
  .visible {
    width: auto;
    overflow: hidden;
  }
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
