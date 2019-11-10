<template>
  <v-container class="box fill-height">
    <v-row justify="center" align="center" class="my-10">
      <v-col cols="12">
        <std-frame>
          <template #header>
            <v-toolbar-title class="pl-5 no-select">
              Log In
            </v-toolbar-title>
          </template>
          <template #body>
            <v-container fluid class="body">
              <v-row>
                <v-col class="no-select">
                  <h2>Choose:</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <auth-provider-list
                    class="auth-btns"
                    :btnClasses="['mb-3']"
                  ></auth-provider-list>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </std-frame>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StdFrame from '@/components/StdFrame.vue';
import AuthProviderList from '@/components/auth/AuthProviderList.vue';

export default {
  name: 'login',
  components: {
    'std-frame': StdFrame,
    'auth-provider-list': AuthProviderList,
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: auto;
}
@media (min-width: 400px) {
  .box {
    width: 400px;
  }
}
.no-select {
  user-select: none;
}
.auth-btns {
  width: 230px;
}
</style>
