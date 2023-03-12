import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageIndex.vue') },
      { path: 'typo', component: () => import('src/pages/PageTypo.vue') },
      // { path: 'codelog', component: () => import('pages/CodElogPage.vue') },
      // { path: 'projects', component: () => import('pages/ProjectsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/PageErrorNotFound.vue'),
  },
];

export default routes;
