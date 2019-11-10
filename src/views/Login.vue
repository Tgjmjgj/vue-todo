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
            <v-container fluid class="body">
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
        {
          provider: Firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
        Firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
          provider: Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: [
            'https://www.googleapis.com/auth/contacts.readonly',
          ],
          customParameters: {
            prompt: 'select_account',
          },
        },
        {
          provider: Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: [
            'public_profile',
            'email',
            'user_likes',
            'user_friends',
          ],
          customParameters: {
            auth_type: 'reauthenticate',
          },
        },
        Firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: auto;
}
.body {
  margin: 0 -12px -12px -12px;
  background: white;
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
