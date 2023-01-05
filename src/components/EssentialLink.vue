<template>
  <q-item clickable v-on:click="goLink(link, external)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
      <!-- <span class="material-symbols-outlined"> home </span> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },

    external: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goLink(url: string, external: boolean) {
      if (external) {
        window.open(url, '_blank');
        return;
      }

      this.$router.push(url);
    },
  },
});
</script>
