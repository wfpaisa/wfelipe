<template>
  <article :class="['project', project.position]">
    <div class="project-img">
      <div class="project-img-in">
        <q-carousel
          swipeable
          animated
          :arrows="false"
          v-model="slide"
          :fullscreen="fullscreen"
          infinite
          height="18.7rem"
          class="bg-default"
          control-color="green"
        >
          <q-carousel-slide :name="1" class="q-pa-none">
            <q-scroll-area class="fit text-center">
              <img
                :src="project.images.small.src"
                :alt="project.images.small.alt"
                :width="project.images.small.width"
                :height="project.images.small.height"
                v-if="!fullscreen"
              />
              <img
                :src="project.images.fullscreen.src"
                :alt="project.images.fullscreen.alt"
                :width="project.images.fullscreen.width"
                :height="project.images.fullscreen.height"
                v-if="fullscreen"
              />
            </q-scroll-area>
          </q-carousel-slide>

          <template v-slot:control>
            <q-carousel-control position="top-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                class="btn-fullscreen"
                :icon="
                  fullscreen ? 'sym_r_fullscreen_exit' : 'sym_r_fullscreen'
                "
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
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

<script setup lang="ts" name="project-full">
import { ref, toRefs } from 'vue';
import { IProject } from './HomeProjects.vue';

const props = defineProps<{
  project: IProject;
}>();

const { project } = toRefs(props);

const slide = ref(1);
const fullscreen = ref(false);
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
      z-index: 2;
      &::before {
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
    }

    .q-carousel {
      position: relative;
      z-index: 2;
      // background-color: hsla(var(--color-acent-base), 74%, 0%);
      background-color: transparent;
      border-radius: 0.5rem;

      img {
        object-fit: cover;
        height: 18.7rem;
        width: 100%;
        display: block;
        margin: auto;
        border-radius: 0.5rem;
        transition: var(--transition);

        @media (min-width: $breakpoint-md-max) {
          opacity: 0.8;

          &:hover {
            opacity: 1;
          }
        }
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

.btn-fullscreen {
  // background-color: hsla(var(--color-acent-base), 74%, 20%);
  // color: var(--color-green);
  background-color: var(--color-green);
  color: black;
}
</style>
