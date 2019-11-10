<template>
  <v-app>
    <v-content class="background">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.background {
  background: #fff url("~@/assets/img/wood-planks.jpg") repeat left top;
}
</style>
