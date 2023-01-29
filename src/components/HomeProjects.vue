<template>
  <!-- PLANE GTK THEME -->
  <article class="project dir-lf">
    <div class="project-img">
      <div>
        <img src="imgs/projects/plane-theme-s.png" alt="plane theme" />
      </div>
    </div>

    <div class="project-info">
      <div class="project-info-in">
        <div class="icons">
          <q-icon name="sym_r_stars" v-for="n in 3" :key="n" />
        </div>
        <h2>Plane GTK theme</h2>
        <p>
          A beautiful dark theme for Gnome Linux with a modern and minimalistic
          design, making it easy on the eyes and providing a sleek look for your
          desktop. <br />
          <a href="https://github.com/wfpaisa/plane-theme" target="_blank">
            <i class="icon-logo-github"></i>
          </a>
          <a href="https://www.gnome-look.org/p/1198768/" target="_blank">
            <i class="icon-logo-tux"></i>
          </a>
        </p>

        <ul class="tags">
          <li>CSS</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>Svg</li>
        </ul>
      </div>
    </div>
  </article>

  <!-- ICON THEME -->
  <article class="project dir-rl">
    <div class="project-info">
      <div class="project-info-in">
        <div class="icons">
          <q-icon name="sym_r_stars" v-for="n in 3" :key="n" />
        </div>
        <h2>Icon theme</h2>
        <p>
          A simple and modern set of icons, designed in Inkscape in the sizes:
          16px, 24px, 32px, 48px, 64px, 96px, 128px, uses JavaScript to generate
          each file in different sizes.
          <br />
          <a href="https://github.com/wfpaisa/plane-icon-theme" target="_blank">
            <i class="icon-logo-github"></i>
          </a>
          <a href="https://www.gnome-look.org/p/1178976/" target="_blank">
            <i class="icon-logo-tux"></i>
          </a>
        </p>

        <ul class="tags">
          <li>Svg</li>
          <li>Javascript</li>
        </ul>
      </div>
    </div>

    <div class="project-img">
      <div>
        <img src="imgs/projects/icon-theme.png" alt="plane icon theme" />
      </div>
    </div>
  </article>

  <!-- PLANE ALL THEMES -->
  <article class="project dir-lf">
    <div class="project-img">
      <div>
        <img src="imgs/projects/plane-theme-s.png" alt="plane theme" />
      </div>
    </div>

    <div class="project-info">
      <div class="project-info-in">
        <!-- <div class="icons">
          <q-icon name="sym_r_stars" v-for="n in 2" :key="n" />
        </div> -->
        <h2>Plane color themes</h2>
        <p>
          A beautiful dark theme for Gnome Linux with a modern and minimalistic
          design, making it easy on the eyes and providing a sleek look for your
          desktop. <br />
          <a href="https://github.com/wfpaisa/plane-theme" target="_blank">
            <i class="icon-logo-github"></i>
          </a>
        </p>

        <ul class="tags">
          <li>CSS</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>Svg</li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  name: 'HomeProjects',
  setup() {
    onMounted(() => {
      /**
       * Scroll effects
       */
      gsap.registerPlugin(ScrollTrigger);

      const boxes = gsap.utils.toArray<HTMLElement>('.project');
      console.log('boxes', boxes);
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { opacity: 0.1, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: box,
              start: 'top 90%',
              // end: 'top 60%',
              end: '+=400',
              // end: () => `+=${box.offsetHeight}`,
              scrub: true,
              // markers: true,
              id: 'project',
            },
          }
        );
      });
    });

    return {
      bounceImage() {
        console.log('sizas');
      },
    };
  },
});
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

    div {
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

    img {
      position: relative;
      width: 100%;
      height: auto;
      display: block;
      z-index: 2;
      border-radius: 0.5rem;
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
        color: hsl(var(--color-acent-base), 74%);
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

      p {
        font-size: var(--font-size-sm);

        a {
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
    width: 5rem;
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
  flex-direction: column-reverse;

  @media (min-width: $breakpoint-xs-max) {
    flex-direction: row;
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
</style>
