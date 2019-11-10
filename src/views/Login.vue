<template>
  <v-container class="box fill-height" style="overflow: hidden">
    <v-row justify="center" align="center" class="my-10">
      <v-col cols="12">
        <std-frame>
          <template #header>
            <v-toolbar-title class="pl-5 no-select">
              Log In
            </v-toolbar-title>
          </template>
          <template #body>
            <v-container fluid>
              <v-row>
                <v-col class="no-select">
                  <h2>Choose:</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <div id="firebase-auth"></div>
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
import * as Firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import StdFrame from '@/components/StdFrame.vue';

const ui = new firebaseui.auth.AuthUI(Firebase.auth());

export default {
  name: 'login',
  components: {
    'std-frame': StdFrame,
  },
  mounted() {
    ui.start('#firebase-auth', {
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          console.log('Successful login!');
          console.log(authResult);
          console.log(redirectUrl);
          return true;
        },
        uiShown() {
          console.log('Shown');
          // The widget is rendered.
          // Hide the loader.
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/#/page/1',
      signInOptions: [
        Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        Firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        Firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: auto;
}
#firebase-auth {
  width: 220px;
}
@media (min-width: 400px) {
  .box {
    width: 400px;
  }
}
.no-select {
  user-select: none;
}
</style>

<style lang="scss">
.box ul {
  padding: 0;
  margin: 0;
}
.firebaseui-card-content {
  padding: 0;
}
</style>
