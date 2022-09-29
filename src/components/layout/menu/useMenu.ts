import {
  Planet,
  Music,
  VideoOne,
  Fm,
  Like,
  Computer,
  DownloadThree,
  PlayTwo,
} from "@icon-park/vue-next";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
interface IMenuItem {
  name: string;
  key: string;
  icon: any;
  theme: "outline" | "filled" | "two-tone" | "multi-color";
}

interface IMenus {
  name: string;
  menus: Array<IMenuItem>;
}

export const useMenu = () => {
  const menuList: Array<IMenus> = [
    {
      name: "在线音乐",
      menus: [
        { name: "推荐", icon: Planet, key: "discovery", theme: "outline" },
        { name: "音乐馆", icon: Music, key: "music", theme: "outline" },
        { name: "视频", icon: VideoOne, key: "video", theme: "outline" },
        { name: "电台", icon: Fm, key: "fm", theme: "outline" },
      ],
    },
    {
      name: "我的音乐",
      menus: [
        { name: "我喜欢", icon: Like, key: "like", theme: "outline" },
        { name: "本地歌曲", icon: Computer, key: "local", theme: "outline" },
        {
          name: "下载歌曲",
          icon: DownloadThree,
          key: "download",
          theme: "outline",
        },
        { name: "最近播放", icon: PlayTwo, key: "recently", theme: "outline" },
      ],
    },
  ];

  const route = useRoute();
  const router = useRouter();
  const currentKey = ref(route.meta.menu);
  watch(
    () => route.meta.menu,
    () => {
      currentKey.value = route.meta.menu;
    },
    { deep: true, immediate: true }
  );
  const clickMenuItem = async (menuItem: IMenuItem) => {
    await router.push({ name: menuItem.key, replace: true });
  };

  return { menuList, currentKey, clickMenuItem };
};
