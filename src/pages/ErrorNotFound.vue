<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <h1>404</h1>

      <p style="opacity: 0.4">Oops. Nothing here...</p>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>

<style scoped lang="scss">
h1 {
  font-size: 20vh;
}
p {
  font-size: var(--font-size-xl);
}
</style>
