<template>
  <q-page>
    <div class="container">
      <h1>CodElog</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ab odio,
        ut dicta optio nam quaerat eligendi! Error eaque
        <a href="#operaty" id="linkoperaty">operaty</a> libero quia perspiciatis
        at rerum omnis! Delectus, cum. Nisi, consequuntur?
      </p>
      <div>
        <q-btn id="register" @click="alert">Register</q-btn>
        <q-btn id="register2">Register2</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Meta } from 'components/models';
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CodElogPage',
  components: {},
  setup() {
    const $q = useQuasar();

    function alert() {
      $q.dialog({
        title: 'Alert',
        message: 'Some message',
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    const meta = ref<Meta>({
      totalCount: 1200,
    });

    return { meta, alert };
  },
  methods: {},
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
