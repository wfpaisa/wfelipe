<template>
  <q-page>
    <div class="container">
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ab odio,
        ut dicta optio nam quaerat eligendi! Error eaque aperiam libero quia
        perspiciatis at rerum omnis! Delectus, cum. Nisi, consequuntur?
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Meta } from 'components/models';

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ProjectsPage',
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
