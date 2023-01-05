<template>
  <q-page>
    <div class="container">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
        consequatur magnam consequuntur autem fugit quibusdam deleniti sunt
        iusto commodi non architecto, fugiat inventore, cumque sit distinctio
        impedit provident veniam porro.
      </p>
      <!-- <h1 class="title">
        <b>Felipe Uribe Aristizabal</b> desarrollador Frontend, amante del
        software libre; disfruta de aprender, adaptar, construir y mejorar.
      </h1>
      <p class="description">
        Cuidadoso con las interfaces y la experiencia de usuario y con la
        habilidad de crear aplicaciones web con tecnologías JavaScript.
      </p> -->
    </div>
  </q-page>
</template>

<script lang="ts">
import { Meta } from 'components/models';

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  components: {},
  setup() {
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { meta };
  },
});
</script>

<style scoped lang="scss">
.title {
  font-weight: 400;
  font-size: 4rem;
  line-height: 1;
}

.description {
  font-size: 2rem;
}

.icon {
  font-size: 56px;
}
</style>
