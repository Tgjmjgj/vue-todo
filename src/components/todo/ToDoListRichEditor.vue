<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          outlined filled
          class="input-title"
          label="Title"
          background-color="white"
          placeholder="Title is required for a card!"
          v-model="header"
          :rules="[() => !!header || 'Write something!']"
        ></v-text-field>
        <v-textarea
          outlined filled
          class="input-content"
          background-color="white"
          label="Content"
          placeholder="You can write more about it here!"
          v-model="content"
          auto-grow
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="py-0">
        <v-btn
          :disabled="!isLoaded"
          color="primary"
          width="90"
          @click="save"
          class="mr-6"
        >Save</v-btn>
        <v-btn
          :disabled="!isLoaded"
          color="primary"
          width="90 "
          @click="cancel"
          class="mr-6"
        >Cancel</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { pathto, ITEM_UPDATE } from '@/store/names';
import throttleIf from '@/util/dev/throttle';

export default {
  name: 'todo-list-rich-editor',
  data() {
    return {
      header: '',
      content: '',
      item: null,
    };
  },
  computed: {
    items() {
      return this.$store.getters[pathto('items')];
    },
    isLoaded() {
      return this.$store.getters.isLoaded;
    },
  },
  methods: {
    save() {
      if (this.isLoaded) {
        const updItem = {
          id: this.$route.params.id,
          header: this.header,
          content: this.content,
        };
        this.$store.dispatch(pathto(ITEM_UPDATE), updItem);
        this.$emit('leave');
      }
    },
    cancel() {
      this.$emit('leave');
    },
  },
  mounted() {
    throttleIf(!this.$store.getters.isLoaded)
      .then(() => this.$store.dispatch('waitItemsLoading'))
      .then(() => {
        const itemId = this.$route.params.id;
        const potentialItem = this.items.find(item => item.id === itemId);
        if (potentialItem) {
          this.item = potentialItem;
          this.header = potentialItem.header;
          this.content = potentialItem.content;
        } else {
          this.$router.replace({ path: '/page' });
        }
      });
  },
};
</script>

<style lang="scss">
.input-title input {
  margin-top: 0;
}
.input-content textarea {
  min-height: 200px;
}
</style>
