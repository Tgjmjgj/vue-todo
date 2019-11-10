<template>
  <v-container fluid>
    <v-row cols="12">
      <v-btn block
        color="#d7433b"
        class="white--text btn"
        :class="btnClasses"
      >
        <div class="btn-cont">
          <v-icon left style="font-size: 26px">mdi-mail</v-icon>
          <span style="text-transform: none">
            Sign in with email
          </span>
        </div>
      </v-btn>
    </v-row>
    <v-row cols="12">
      <v-btn block
        color="#333"
        class="white--text btn"
        :class="btnClasses"
      >
        <div class="btn-cont">
          <v-icon left style="font-size: 26px">mdi-github-box</v-icon>
          <span style="text-transform: none">
            Sign in with GitHub
          </span>
        </div>
      </v-btn>
    </v-row>
    <v-row cols="12">
      <v-btn block
        color="white"
        class="btn"
        :class="btnClasses"
        style="color: #333"
      >
        <div class="btn-cont">
          <v-icon left style="font-size: 26px">mdi-google-plus</v-icon>
          <span style="text-transform: none">
            Sign in with Google
          </span>
        </div>
      </v-btn>
    </v-row>
    <v-row cols="12">
      <v-btn block
        color="#3e5995"
        class="white--text btn"
        :class="btnClasses"
      >
        <div class="btn-cont">
          <v-icon left style="font-size: 26px">mdi-facebook-box</v-icon>
          <span style="text-transform: none">
            Sign in with Facebook
          </span>
        </div>
      </v-btn>
    </v-row>
    <v-row cols="12">
      <v-btn block
        color="#5daceb"
        class="white--text btn"
        :class="btnClasses"
      >
        <div class="btn-cont">
          <v-icon left style="font-size: 26px">mdi-twitter-box</v-icon>
          <span style="text-transform: none">
            Sign in with Twitter
          </span>
        </div>
      </v-btn>
    </v-row>
    <v-row cols="12">
      <v-btn block
        color="#f1b42f"
        class="white--text btn"
        :class="btnClasses"
      >
        <div class="btn-cont">
          <v-icon left style="font-size: 26px">mdi-account-box</v-icon>
          <span style="text-transform: none">
            Continue as guest
          </span>
        </div>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'auth-provider-list',
  props: {
    btnClasses: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  box-sizing: border-box;
  width: 200px;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  height: 42px !important;
}
</style>
