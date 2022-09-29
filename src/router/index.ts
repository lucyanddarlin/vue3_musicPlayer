import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "discovery",
      component: () => import("@/views/Root.vue"),
      children: [
        {
          path: "discovery",
          name: "discovery",
          component: () => import("@/views/discovery/index.vue"),
          meta: {
            menu: "discovery",
            keepAlive: true,
          },
        },
        {
          path: "music",
          name: "music",
          redirect: { name: "picked" },
          component: () => import("@/views/music/index.vue"),
          meta: {
            menu: "music",
          },
          children: [
            {
              path: "picked",
              name: "picked",
              component: () => import("@/views/music/picked/index.vue"),
            },
            {
              path: "dt",
              name: "dt",
              component: () => import("@/views/music/dt/index.vue"),
            },
            {
              path: "topList",
              name: "topList",
              component: () => import("@/views/music/topList/index.vue"),
            },
            {
              path: "artists",
              name: "artists",
              component: () => import("@/views/music/artists/index.vue"),
            },
            {
              path: "category",
              name: "category",
              component: () => import("@/views/music/category/index.vue"),
            },
            {
              path: "albums",
              name: "albums",
              component: () => import("@/views/music/albums/index.vue"),
            },
          ],
        },
        {
          path: "mvDetail",
          name: "mvDetail",
          component: () => import("@/views/mvDetail/index.vue"),
        },
        {
          path: "playList",
          name: "playList",
          component: () => import("@/views/playList/index.vue"),
        },
        {
          path: "artistDetail",
          name: "artistDetail",
          component: () => import("@/views/artistDetail/index.vue"),
        },
        {
          path: "album",
          name: "album",
          component: () => import("@/views/ablum/index.vue"),
        },
        {
          path: "video",
          name: "video",
          component: () => import("@/views/video/index.vue"),
          meta: {
            menu: "video",
          },
        },
      ],
    },
  ],
});

export default router;
