<template>
  <li @click="dialog = !dialog" class="item transition">
    <div class="icon"><q-icon name="sym_r_expand_content" /></div>
    <div class="description">
      <div class="name">{{ item.name }}</div>
      <ul>
        <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
    <!-- Full screen image -->
    <q-dialog v-model="dialog" maximized @show="onDialogShow()">
      <q-card class="dialog-card">
        <q-bar class="dialog-card-bar">
          <q-space />
          <q-btn dense flat icon="sym_r_close_fullscreen" v-close-popup />
        </q-bar>

        <q-card-section class="dialog-card-content">
          <div ref="imgFullScreen" v-html="item.dialogContent"></div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </li>
</template>

<script setup lang="ts" name="components-portfolio-portfolio-preview">
import { ref, toRefs } from 'vue';
import { IPortfolioItem } from './PortfolioList.vue';
import panzoom from 'panzoom';

const props = defineProps<{
  item: IPortfolioItem;
}>();

const { item } = toRefs(props);

const dialog = ref(false);

const imgFullScreen = ref<HTMLInputElement>();

const onDialogShow = () => {
  console.log('imgFullScreen', imgFullScreen);
  if (window.innerWidth < 480 && imgFullScreen.value)
    panzoom(imgFullScreen.value);
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  box-shadow: -2px 0 0 hsla(var(--color-acent-base), 70%, 20%),
    2px 0 0 hsla(var(--color-acent-base), 70%, 20%);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;

    i {
      background-color: hsla(var(--color-acent-base), 70%, 20%);
      border-radius: 50%;
      padding: 0.15rem;
      font-size: 1.25rem;
    }
  }
  .name {
    font-size: var(--font-size-base);
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;

    li {
      display: inline-block;
      margin-right: 0.5rem;
      font-size: 70%;
      font-weight: 300;
      padding: 0px 0.25rem;
      background-color: hsla(var(--color-acent-base), 70%, 10%);
    }
  }

  &:hover {
    background-color: hsla(var(--color-acent-base), 70%, 5%);
    cursor: pointer;

    .icon i {
      background-color: hsla(var(--color-acent-base), 50%, 60%);
    }
  }
}

.dialog-card {
  width: 80%;
  max-width: 100%;
}
</style>
