<template>
  <q-page>
    <div class="container">
      <!-- <h1 class="title">
        <b>Felipe Uribe Aristizabal</b> desarrollador Frontend, amante del
        software libre; disfruta de aprender, adaptar, construir y mejorar.
      </h1>
      <p class="description">
        Cuidadoso con las interfaces y la experiencia de usuario y con la
        habilidad de crear aplicaciones web con tecnologías JavaScript.
      </p> -->

      <div class="intro">
        <h1 class="title">
          <b>Accusamus</b> quidem neque Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus quidem neque et deserunt.
        </h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          consectetur facilis impedit aperiam dolores voluptatibus id facere
          perspiciatis dolorem.
        </p>
      </div>

      <!-- <div class="codelog">CodELog</div> -->

      <!-- <div class="projects">Projects</div> -->
    </div>
  </q-page>
</template>

<script lang="ts">
import { Meta } from 'components/models';

import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup() {
    const router = useRouter();
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      router.push(redirect);
      sessionStorage.removeItem('redirect');
      return;
    }

    const $q = useQuasar();

    console.log($q.dark.mode);

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
  line-height: 1.2;
}

.description {
  font-size: 2rem;
  font-weight: 300;
}

.icon {
  font-size: 56px;
}
</style>
