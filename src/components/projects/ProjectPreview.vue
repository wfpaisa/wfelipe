<template>
  <article :class="['project', project.position]">
    <div class="project-img">
      <div class="project-img-in">
        <q-btn
          round
          dense
          class="btn-fullscreen"
          icon="sym_r_fullscreen"
          @click="dialog = true"
        />

        <!-- Preview image -->
        <img
          :src="project.images.small.src"
          :alt="project.images.small.alt"
          :width="project.images.small.width"
          :height="project.images.small.height"
          @click="dialog = true"
        />

        <!-- Full screen image -->
        <q-dialog v-model="dialog" maximized @show="onDialogShow()">
          <q-card class="dialog-card">
            <q-bar class="dialog-card-bar">
              <q-space />
              <q-btn dense flat icon="sym_r_close_fullscreen" v-close-popup />
            </q-bar>

            <q-card-section class="dialog-card-content">
              <img
                ref="imgFullScreen"
                :src="project.images.fullscreen.src"
                :alt="project.images.fullscreen.alt"
                :width="project.images.fullscreen.width"
                :height="project.images.fullscreen.height"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </div>

    <div class="project-info">
      <div class="project-info-in">
        <div class="icons">
          <q-icon name="sym_r_stars" v-for="n in 3" :key="n" />
        </div>

        <h2>{{ project.name }}</h2>

        <div class="project-desc">
          {{ project.description }}
          <br />
          <a
            v-for="(link, key) in project.links"
            :href="link.link"
            :target="link.target"
            :aria-label="link.aria"
            :key="key"
          >
            <i :class="link.icon"></i>
          </a>
        </div>

        <ul class="tags">
          <li v-for="(tag, key) in project.tags" :key="key">{{ tag }}</li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts" name="components-projects-project-preview">
import { ref, toRefs } from 'vue';
import { IProject } from './ProjectsList.vue';
import panzoom from 'panzoom';

const props = defineProps<{
  project: IProject;
}>();

const { project } = toRefs(props);

const dialog = ref(false);

const imgFullScreen = ref<HTMLInputElement>();

const onDialogShow = () => {
  if (window.innerWidth < 480 && imgFullScreen.value)
    panzoom(imgFullScreen.value);
};
</script>

<style scoped lang="scss">
article {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  margin-bottom: 4rem;
  align-items: center;

  @media (min-width: $breakpoint-xs-max) {
    gap: 1rem;
    flex-direction: row;
  }
  .project-img {
    width: 100%;

    .project-img-in {
      position: relative;
      z-index: 1;

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        box-shadow: 0 0 0 4px hsla(var(--color-acent-base), 74%, 20%);
        z-index: 1;
        top: -0%;
        left: -0%;
        transform: skew(0deg, 4deg);
        border-radius: 0.5rem;
        background-color: hsla(var(--color-acent-base), 74%, 20%);
      }

      img {
        position: relative;
        object-fit: cover;
        width: 100%;
        display: block;
        margin: auto;
        border-radius: 0.5rem;
        transition: var(--transition);
        z-index: 2;
        cursor: pointer;
      }
    }
  }

  .project-info {
    width: 100%;
    position: relative;
    z-index: 3;

    .project-info-in {
      padding: 1rem;
      border-radius: var(--border-radius-base);

      .icons {
        color: var(--color-yellow);
        font-size: var(--font-size-lg);
        margin: 0 -0.4rem;

        i {
          margin: 0 0.15rem;
        }
      }

      h2 {
        margin-top: 1rem;
        color: hsl(var(--color-acent-base), 94%);
      }

      .project-desc {
        font-size: var(--font-size-sm);
        margin: 1rem 0;

        a {
          color: hsla(var(--color-acent-base), 70%, 60%);
          display: inline-block;
          font-size: var(--font-size-md);
          &:hover {
            color: hsl(var(--color-acent-base), 70%);
          }
        }
      }

      ul {
        margin: 0px;
        padding: 0px;

        li {
          display: inline-block;
          margin-left: 0.5rem;
          font-size: var(--font-size-sm);
          font-weight: 300;
          padding: 0px 0.25rem;
          background-color: hsla(var(--color-acent-base), 70%, 10%);
        }
      }
    }
  }

  a {
    align-items: center;
    padding: 0.5rem;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  img {
    // width: 5rem;
    max-width: 100%;
    height: auto;
  }
}

.dir-lf {
  .project-info-in {
    border-bottom: 1px solid hsla(var(--color-acent-base), 74%, 4%);
    box-shadow: 0 0.5rem 0.5rem hsl(var(--color-bg-base), 14%);

    @media (min-width: $breakpoint-xs-max) {
      border-left: 1px solid hsla(var(--color-acent-base), 74%, 4%);
      border-bottom: none;
      box-shadow: -0.5rem 0 0.5rem hsl(var(--color-bg-base), 14%);
    }
  }
}

.dir-rl {
  flex-direction: column;

  @media (min-width: $breakpoint-xs-max) {
    flex-direction: row-reverse;
  }

  .project-info-in {
    text-align: right;
    border-bottom: 1px solid hsla(var(--color-acent-base), 74%, 4%);
    box-shadow: 0 0.5rem 0.5rem hsl(var(--color-bg-base), 14%);

    @media (min-width: $breakpoint-xs-max) {
      border-right: 1px solid hsla(var(--color-acent-base), 74%, 4%);
      border-bottom: none;
      box-shadow: 0.5rem 0 0.5rem hsl(var(--color-bg-base), 14%);
    }
  }
}

.bg-default {
  background-color: hsl(var(--color-bg-base), 17%);
}
.dialog-card {
  background-color: hsl(var(--color-bg-base), 17%);
  width: fit-content;
  padding: 0px;
  position: relative;

  .dialog-card-bar {
    z-index: 2;
    width: 100%;
    top: 0px;
    left: 0px;

    .q-btn {
      background-color: hsla(var(--color-acent-base), 50%);
      color: black;
    }
  }

  .dialog-card-content {
    padding: 0px;
    overflow: auto;
    height: calc(100% - 32px);

    img {
      max-width: 100%;
      height: auto;
    }
  }
}

.btn-fullscreen {
  background-color: hsla(var(--color-acent-base), 60%, 50%);
  color: black;
  position: absolute;
  z-index: 3;
  top: 1rem;
  right: 1rem;
}
</style>
