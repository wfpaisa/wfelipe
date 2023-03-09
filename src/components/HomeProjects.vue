<template>
  <ProjecFull
    v-for="(project, key) in projects"
    :project="project"
    :key="key"
  />
</template>

<script lang="ts" setup name="home-projects">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjecFull from './ProjectFull.vue';

export interface ILinks {
  link: string;
  target: string;
  aria: string;
  icon: string;
}

export interface IProject {
  name: string;
  description: string;
  tags: string[];
  position: 'dir-lf' | 'dir-rl';
  images: {
    small: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
    fullscreen: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
  };
  links: ILinks[];
}

const projects: IProject[] = [
  {
    name: 'Plane GTK theme',
    position: 'dir-lf',
    description:
      'A beautiful dark theme for Gnome Linux with a modern and minimalistic design, making it easy the eyes and providing a sleek look for your desktop.',
    tags: ['CSS', 'SASS', 'Javascript', 'Svg'],
    images: {
      small: {
        src: 'imgs/projects/plane-theme/plane-theme-s.webp',
        alt: 'plane theme',
        width: '1920',
        height: '1200',
      },
      fullscreen: {
        src: 'imgs/projects/universal/universal-presentacion.jpg',
        alt: 'plane theme',
        width: '1400',
        height: '10217',
      },
    },
    links: [
      {
        link: 'https://github.com/wfpaisa/plane-theme',
        target: '_blank',
        aria: 'repo plane theme link',
        icon: 'icon-logo-github',
      },
      {
        link: 'https://www.gnome-look.org/p/1198768/',
        target: '_blank',
        aria: 'open project in gnome-look',
        icon: 'icon-logo-tux',
      },
    ],
  },
  {
    name: 'Icon theme',
    description:
      'A simple and modern set of icons, designed in Inkscape in the sizes: 16px, 24px, 32px, 48px, 64p 96px, 128px, uses JavaScript to generate each file in different sizes.',
    links: [
      {
        link: 'https://github.com/wfpaisa/plane-icon-theme',
        target: '_blank',
        aria: 'repo plane theme link',
        icon: 'icon-logo-github',
      },
      {
        link: 'https://www.gnome-look.org/p/1178976/',
        target: '_blank',
        aria: 'open project in gnome-look',
        icon: 'icon-logo-tux',
      },
    ],
    position: 'dir-rl',
    tags: ['SVG, Javascript'],
    images: {
      small: {
        src: 'imgs/projects/icon-theme/icon-theme.webp',
        alt: 'plane icon theme',
        width: '1600',
        height: '1000',
      },
      fullscreen: {
        src: 'imgs/projects/icon-theme/icon-theme.webp',
        alt: 'plane icon theme',
        width: '1600',
        height: '1000',
      },
    },
  },
];

onMounted(() => {
  /**
   * Scroll effects
   */
  gsap.registerPlugin(ScrollTrigger);

  const boxes3 = gsap.utils.toArray<HTMLElement>('.project');

  boxes3.forEach((box) => {
    gsap.fromTo(
      box,
      { opacity: 0.1, y: 200, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: box,
          start: 'top 90%',
          // end: 'top 60%',
          end: '+=100',
          // end: () => `+=${box.offsetHeight}`,
          scrub: true,
          markers: false,
          id: 'project',
        },
      }
    );
  });
});
</script>

<style scoped lang="scss"></style>
