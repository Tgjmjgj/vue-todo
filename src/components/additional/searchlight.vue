<template>
  <div class="sl-cont">
    <div
      ref="point"
      class="searchlight"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'searchlight',
  methods: {
    move(e) {
      this.$refs.point.style.left = `calc(${e.pageX - 100}px - 200vw)`;
      this.$refs.point.style.top = `calc(${e.pageY - 100}px - 200vh)`;
    },
  },
  mounted() {
    document.body.style.touchAction = 'none';
    document.addEventListener('pointermove', this.move);
  },
  beforeDestroy() {
    document.removeEventListener('pointermove', this.move);
    document.body.style.touchAction = null;
  },
};
</script>

<style lang="scss" scoped>
.sl-cont {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100vw;
  cursor: none;
}
.searchlight {
  position: absolute;
  height: 200px;
  width: 200px;
  top: -100vh;
  left: -100vw;
  border-style: solid;
  border-color: #000;
  border-width: 200vh 200vw;
  box-sizing: content-box;
  border-radius: 50%;
  margin: 0;
  filter: blur(50px);
}
</style>

<style lang="scss">
#app > .v-application--wrap {
  backface-visibility: visible;
}
</style>
