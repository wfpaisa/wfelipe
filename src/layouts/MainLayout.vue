<template>
  <q-layout view="hHh lpR ffr">
    <q-header>
      <q-toolbar>
        <q-toolbar-title style="overflow: visible">
          <div class="logo tada">
            <span class="icon-logo" @click="changeColor" title="Change color">
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
          </div>
        </q-toolbar-title>

        <div class="menu">
          [
          <a
            v-for="(link, key) in essentialLinks"
            :key="key"
            :href="link.link"
            :aria-label="`link to section ${link.title}`"
          >
            <span>0{{ key + 1 }}.</span> {{ link.title }}
          </a>
          ]
        </div>

        <q-btn
          dense
          flat
          round
          icon="sym_r_menu"
          class="btn-menu"
          @click="toggleRightDrawer"
          aria-label="open menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      elevated
      class="r-drawer"
    >
      <q-list class="q-pt-md">
        <EssentialLink
          v-for="(link, itemKey) in essentialLinks"
          :key="itemKey"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <div class="content">
        <div class="container">
          <div class="f-p1">
            <a
              href="mailto:hi@wfelipe.com"
              class="link"
              aria-label="mail to wfelipe"
              >hi@wfelipe.com</a
            >
          </div>
          <div class="f-p2">
            <a
              href="https://github.com/wfpaisa/"
              target="_blank"
              aria-label="profile in github of felipe uribe"
              title="Profile in github of felipe uribe"
            >
              <i class="icon-logo-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-uribe"
              target="_blank"
              aria-label="profile in linkedin of felipe uribe"
              title="Profile in linkedin of felipe uribe"
            >
              <i class="icon-logo-linkedin"></i>
            </a>
            <a
              href="https://www.opendesktop.org/u/wfpaisa"
              target="_blank"
              aria-label="profile in opendesktop of felipe uribe"
              title="Profile in opendesktop of felipe uribe"
            >
              <i class="icon-logo-tux"></i>
            </a>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'src/layouts/components/NavLinks.vue';

const linksList = [
  {
    title: 'About',
    caption: 'Felipe Uribe',
    icon: 'sym_r_fingerprint',
    link: '#about',
  },

  {
    title: 'Work',
    caption: 'My history',
    icon: 'sym_r_business_center',
    link: '#work',
  },

  {
    title: 'Projects',
    caption: 'All projects',
    icon: 'sym_r_code_blocks',
    link: '#projects',
    external: false,
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const rightDrawerOpen = ref(false);

    /**
     * Welcome console
     */
    window.console.log(
      '%c¡Bienvenido! Puedes ver el código fuente en: https://github.com/wfpaisa/wfelipe - v1.0',
      'background: linear-gradient(135deg , #492279 0%,  #0CC8BD 100%); color: #fff; border-radius: 5px; font-size: 16px; font-weight: bold; padding: 4px 8px;'
    );

    /**
     * Change default colors
     */
    const changeColor = () => {
      let min = 0;
      let max = 360;

      let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
      let random2 = Math.floor(Math.random() * (max - min + 1)) + min;
      let random3 = Math.floor(Math.random() * (max - min + 1)) + min;
      let doc = document.documentElement.style;

      doc.setProperty('--color-bg-base', `${random1}, 22%`);
      doc.setProperty('--color-acent-base', `${random2}, 100%`);
      doc.setProperty('--color-complement-base', `${random3}, 100%`);
    };

    return {
      essentialLinks: linksList,
      changeColor,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
header {
  .logo {
    display: inline-block;

    .icon-logo {
      font-size: 2rem;
      transition: var(--transition);
      color: hsl(var(--color-acent-base), 74%);
      cursor: pointer;
      display: inline-block;

      &:hover {
        color: hsl(var(--color-acent-base), 68%);
      }
    }
  }

  &.q-header {
    background-color: hsla(var(--color-bg-base), 17%, 60%);
    backdrop-filter: blur(8px);
    top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.menu {
  display: none;

  @media (min-width: $breakpoint-xs-max) {
    display: block;
  }

  a {
    border-bottom: 1px solid transparent;
    color: var(--color-fg);
    display: inline-block;
    font-size: var(--font-size-sm);
    font-weight: 300;
    padding: 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
      color: hsl(var(--color-acent-base), 74%);
    }

    &::after {
      content: ',';
    }
    &:last-child::after {
      display: none;
    }

    &::before {
      content: '';
      display: block;
      width: 0px;
      height: 100%;
      position: absolute;
      bottom: 0;
      background-color: hsla(var(--color-acent-base), 74%, 14%);
      transition: var(--transition);
      z-index: -1;
      left: 0;
    }
    &:hover::before {
      width: 100%;
    }

    span {
      color: hsl(var(--color-acent-base), 74%);
      margin-right: -4px;
    }
  }
}

.footer {
  background: none;
  a {
    color: var(--color-complement);
  }

  .content {
    color: var(--color-fg);
    padding: 0px;
    margin: 0px;

    @media (max-width: $breakpoint-md-max) {
      padding: 2rem 0;
    }

    .container {
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
    }

    .f-p1 {
      color: white;
      z-index: 1;
      bottom: 1rem;
      left: 2.5rem;
      letter-spacing: 0.2rem;
      font-size: var(--font-size-sm);
      font-weight: 300;

      a {
        color: white;

        &:hover {
          color: hsl(var(--color-acent-base), 74%);
        }
      }

      &::after {
        content: '';
        width: 10rem;
        border-top: 1px solid rgba(255, 255, 255, 0.4);
        height: 1px;
        display: inline-block;
        align-items: center;
        vertical-align: middle;
        margin-left: 1rem;
      }

      @media (min-width: $breakpoint-sm-max) {
        writing-mode: vertical-lr;
        position: fixed;
        transform: rotate(-180deg);
        &::after {
          display: none;
        }

        &::before {
          content: '';
          border-left: 1px solid rgba(255, 255, 255, 0.4);
          width: 1px;
          border-top: 1px solid rgba(255, 255, 255, 0.4);
          height: 10rem;
          display: inline-block;
          align-items: center;
          margin-bottom: 1rem;
        }
      }
    }

    .f-p2 {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: var(--font-size-md);

      @media (min-width: $breakpoint-sm-max) {
        bottom: 40%;
        position: fixed;
        right: 2.5rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
      }

      a {
        display: inline-block;
        opacity: 0.7;

        &:hover {
          opacity: 1;
          transform: scale(1.2, 1.2);
        }

        img {
          display: block;
        }
      }
    }
  }
}

.btn-menu {
  color: var(--color-fg);
  @media (min-width: $breakpoint-xs-max) {
    display: none;
  }
}

.r-drawer {
  background-color: var(--color-bg);
}
</style>
