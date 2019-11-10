<template>
  <v-dialog
    v-model="dialog"
    max-width="300"
    class="white"
  >
    <v-card>
      <v-card-title color class="headline">
        {{ caption }}
      </v-card-title>
      <v-card-text> {{ text }} </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text
          @click="no"
        >No</v-btn>
        <v-btn text
          @click="yes"
        >Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'yes-no-dialog',
  model: {
    prop: 'show',
    event: 'change',
  },
  data() {
    return {
      dialog: false,
      data: null,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    caption: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'Yes or No?',
    },
    yesLabel: {
      type: String,
      default: 'Yes',
    },
    noLabel: {
      type: String,
      default: 'No',
    },
  },
  methods: {
    yes() {
      this.dialog = false;
      this.$emit('change', this.data);
      this.$emit('click:yes', this.data);
    },
    no() {
      this.dialog = false;
      this.$emit('change', this.data);
      this.$emit('click:no', this.data);
    },
    showDialog(data) {
      this.data = data;
      this.dialog = true;
      this.$emit('change', this.data);
    },
  },
};
</script>
