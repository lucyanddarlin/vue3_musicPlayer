import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

interface IMusicMenu {
  name: string;
  label: string;
}

export const useMusicMenu = () => {
  const musicMenu: IMusicMenu[] = [
    { label: "精选", name: "picked" },
    { label: "有声电台", name: "dt" },
    { label: "排行", name: "topList" },
    { label: "歌手", name: "artists" },
    { label: "分类歌单", name: "category" },
    { label: "专辑", name: "albums" },
  ];
  const route = useRoute();
  const router = useRouter();
  const currentMenu = ref(route.name);
  const handleClickTabs = ({ props }: { props: IMusicMenu }) => {
    router.push({ name: props.name, replace: true });
  };

  watch(
    () => route.name,
    (val) => {
      currentMenu.value = val;
    },
    { deep: true, immediate: true }
  );

  return {
    musicMenu,
    currentMenu,
    handleClickTabs,
  };
};
