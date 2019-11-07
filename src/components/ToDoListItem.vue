<template>
  <li class="item">
    <div class="main">
      <span v-if="number" class="num"> {{ number }} </span>
      <div class="content">
        <slot></slot>
      </div>
      <base-icon-button
        class="icon-btn"
        icon="pen"
        @click="clickEdit"
      ></base-icon-button>
      <base-icon-button
        class="icon-btn"
        icon="times"
        @click="clickDelete"
      ></base-icon-button>
    </div>
    <div class="append">
      <base-icon-button
        class="icon-btn"
        :class="currentState"
        :icon="stateIcon"
        @click="clickState"
      ></base-icon-button>
    </div>
  </li>
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

.item {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
.item:hover {
  background: #f5f6f7;
}
.item > div {
  display: flex;
  height: 100%;
}
.main {
  flex: 1;
}
.append {
  width: 60px;
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
  height: 1em;
  width: 1em;
}
.main .icon-btn {
  visibility: hidden;
}
.main:hover .icon-btn {
  visibility: visible;
}
.waiting {
  background: #c3c3c3;
}
.completed {
  background: #a4ffa4;
}
</style>
