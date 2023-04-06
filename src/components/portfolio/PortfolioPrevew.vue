<template>
  <li class="item transition">
    <div class="description">
      <div class="name">{{ item.name }}</div>

      <div class="tags">
        <div v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</div>
      </div>

      <ul class="media">
        <!-- Fullscreen -->
        <li @click="dialog = !dialog" v-if="item.dialog">
          <q-btn
            label="preview"
            class="btn-custom"
            icon="sym_r_photo"
            size="sm"
          ></q-btn>
        </li>

        <!-- video -->
        <li v-if="item.video">
          <a :href="item.video" target="_blank">
            <q-btn
              label="Video"
              class="btn-custom"
              icon="sym_r_movie"
              size="sm"
            ></q-btn>
          </a>
        </li>
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
          <div ref="imgFullScreen" v-html="item.dialog"></div>
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

  .name {
    font-size: var(--font-size-base);
    margin-bottom: 0.5rem;
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 0.15rem;

    .tag {
      font-size: 70%;
    }
  }

  .media {
    list-style: none;
    padding: 0px;
    margin: 1rem 0 0.25rem 0;

    li {
      display: inline-block;
      margin-right: 1rem;
      i {
        cursor: pointer;
        background-color: hsla(var(--color-acent-base), 60%, 40%);
        border-radius: 50%;
        padding: 0.5rem;
        font-size: 1rem;
        color: white;

        &:hover {
          background-color: hsla(var(--color-acent-base), 50%, 80%);
        }
      }
    }
  }
}

.dialog-card {
  width: 80%;
  max-width: 100%;
}

.btn-custom {
  background-color: var(--color-complement);
  color: black;
  font-weight: bold;
  letter-spacing: 2px;
  transition: var(--transition);

  &:hover {
    transform: scale(1.05, 1.05);
  }
}
</style>
