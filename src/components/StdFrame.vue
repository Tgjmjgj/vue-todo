<template>
  <v-card flat tile>
    <v-toolbar flat color="primary" class="white--text">
      <slot name="header"></slot>
    </v-toolbar>
    <v-card-text style="background: #e0e3e6;" class="px-3 pt-0 pb-3">
      <slot name="body"></slot>
    </v-card-text>
  </v-card>
</template>
