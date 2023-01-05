<template>
  <q-layout view="hhr lpR ffr">
    <q-header class="bg-transparent text-black">
      <q-toolbar>
        <q-toolbar-title>
          <router-link :to="{ path: '/' }">
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg"
              />
            </q-avatar>
          </router-link>
        </q-toolbar-title>

        <div class="menu">
          <router-link :to="{ path: 'about' }">About</router-link>
          <router-link :to="{ path: 'codelog' }">CodElog</router-link>
          <router-link :to="{ path: 'projects' }">Projects</router-link>
        </div>

        <q-btn
          dense
          flat
          round
          icon="sym_r_menu"
          class="btn-menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      elevated
    >
      <q-list class="q-pt-md">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-transparent text-center footer">
      <q-toolbar>
        <q-toolbar-title>
          <div class="container">
            <div>@wfelipe</div>
            <div>Javascript, CSS, HTML, SVG</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    caption: '',
    icon: 'sym_r_home_app_logo',
    link: '/',
  },

  {
    title: 'About',
    caption: 'Felipe Uribe',
    icon: 'sym_r_eco',
    link: '/about',
  },
  {
    title: 'Github',
    caption: 'github.com/wfpaisa',
    icon: 'sym_r_code_blocks',
    link: 'https://github.com/wfpaisa',
    external: true,
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const rightDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss">
.menu {
  a {
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    border-radius: 0.25rem;
    color: rgb(21, 25, 54);

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}

.footer .container {
  color: black;
  font-size: 70%;
  display: flex;
  justify-content: space-between;
}

.btn-menu {
  @media (min-width: $breakpoint-xs-max) {
    display: none;
  }
}
</style>
