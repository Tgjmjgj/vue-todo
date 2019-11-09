<template>
  <v-app>
    <v-content class="background">
      <v-container fluid>
        <v-row justify="center" align="start" class="my-12">
          <v-col cols="12" sm="10" class="width-boundary">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.background {
  background: #fff url("~@/assets/img/wood-planks.jpg") repeat left top;
}
.width-boundary {
  max-width: 60rem;
}
</style>
