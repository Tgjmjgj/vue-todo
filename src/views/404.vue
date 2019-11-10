<template>
  <v-container fluid class="out-cont fill-height">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1>Error 404</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>Page not found</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center mt-12">
          <v-hover #default="{ hover }">
            <v-btn x-large
              :outlined="!hover"
              color="black"
              class="home-btn"
              :class="hover ? 'white--text' : ''"
              :to="'/'"
            >BACK TO HOME</v-btn>
          </v-hover>
        </v-col>
      </v-row>
      <searchlight></searchlight>
    </v-container>
  </v-container>
</template>

<script>
import Searchlight from '@/components/additional/Searchlight.vue';

export default {
  name: 'page-not-found',
  components: {
    searchlight: Searchlight,
  },
};
</script>

<style lang="scss" scoped>
$sm: 600px;
$md: 960px;

.out-cont {
  display: flex;
  flex-flow: column;
  justify-content: center;
}
h1 {
  font-weight: 900;
  font-size: 4rem;

}
h2 {
  font-size: 2rem;
}
.home-btn {
  z-index: 999;
  cursor: pointer;
}
@media (min-width: $sm) {
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 2.6rem;
  }
}
@media (min-width: $md) {
  h1 {
    font-size: 10rem;
    margin-top: -100px;
  }
  h2 {
    font-size: 4rem;
  }
}
</style>
