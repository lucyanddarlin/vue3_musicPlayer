import { defineStore, storeToRefs } from "pinia";
import { reqGetSongDetail, reqGetSongUrl } from "@/utils";
import type { ISongUrlChild } from "@/modules/apiDataType/musicData";
import type { ISongDetail } from "@/modules/apiDataType/SongDetail";
import { isNull } from "@/utils/common/common";
import { onMounted, onUnmounted, watch } from "vue";

export const usePlayerStore = defineStore({
  id: "players",
  state: () => ({
    audio: new Audio(),
    volume: localStorage.getItem("player-volume")?.toInt() || 60,
    playType: 0, // 循环模式 0 单曲循环 1 列表循环 2随机播放
    currentTime: 0,
    duration: 0,
    sliderInput: false, // 是否正在拖动进度条
    muted: false, // 是否静音
    isPlaying: false, // 是否正在播放
    isPause: true, // 是否处于暂停
    showPlayList: false, // 展开右侧播放列表,
    playList: [] as ISongDetail[], //播放列表,
    id: 0, // 歌曲 id,
    songUrl: {} as ISongUrlChild,
    url: "",
    song: {} as ISongDetail,
    isEnd: false,
  }),
  getters: {
    playListCount: (state) => {
      return state.playList.length;
    },
    thisIndex: (state) => {
      return state.playList.findIndex((song) => song.id === state.id);
    },
    nextSong(state): ISongDetail {
      const { thisIndex, playListCount } = this;
      if (thisIndex === playListCount - 1) {
        return state.playList.first();
      } else {
        const nextIndex: number = thisIndex + 1;
        return state.playList[nextIndex];
      }
    },
    prevSong(state): ISongDetail {
      const { thisIndex } = this;
      if (thisIndex === 0) {
        return state.playList.last();
      } else {
        const prevIndex: number = thisIndex - 1;
        return state.playList[prevIndex];
      }
    },
  },
  actions: {
    init() {
      this.audio.volume = this.volume / 100;
    },
    onSliderChange(val: number) {
      this.currentTime = val;
      this.audio.currentTime = val;
      this.sliderInput = false;
    },
    onSliderInput(val: number) {
      this.sliderInput = true;
    },
    clickSlider() {
      this.sliderInput = false;
      this.audio.currentTime = this.currentTime;
    },
    toggleMuted() {
      this.muted = !this.muted;
      this.audio.muted = this.muted;
    },
    togglePlayer() {
      if (isNull(this.song)) return;
      if (this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
        this.isPause = true;
      } else {
        this.audio.play().then((res) => {
          this.isPlaying = true;
          this.isPause = false;
        });
      }
    },
    toggleLoopType() {
      if (this.playType === 2) {
        this.playType = 0;
      } else {
        this.playType++;
      }
    },
    setVolume(volume: number) {
      volume = volume > 100 ? 100 : volume;
      volume = volume < 0 ? 0 : volume;
      this.volume = volume;
      this.audio.volume = volume / 100;
      localStorage.setItem("player-volume", volume.toString());
    },
    async playSong(id: number) {
      if (id == this.id) return;
      const { data } = await reqGetSongUrl(id);
      this.audio.src = data[0].url;
      this.audio
        .play()
        .then((res) => {
          this.isPlaying = true;
          this.isPause = false;
          this.songUrl = data[0];
          this.id = id;
          this.url = data[0].url;
          this.setSongDetail();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    playNextSong() {
      if (this.playType === 2) {
        this.randomPlay();
        return;
      }
      this.playSong(this.nextSong.id);
    },
    playPrevSong() {
      if (this.playType === 2) {
        this.randomPlay();
        return;
      }
      this.playSong(this.prevSong.id);
    },
    playerEnd() {
      console.log("song end");
      this.isPause = true;
      switch (this.playType) {
        case 0:
          this.rePLaySong();
          break;
        case 1:
          this.playNextSong();
          break;
        case 2:
          this.randomPlay();
          break;
      }
    },
    rePLaySong() {
      setTimeout(() => {
        this.isPlaying = true;
        this.isPause = false;
        this.currentTime = 0;
        this.audio.play();
      }, 1500);
    },
    randomPlay() {
      this.playSong(this.playList.sample().id);
    },
    async setSongDetail() {
      const { songs } = await reqGetSongDetail(this.id);
      this.song = songs[0];
      this.pushPlayerList(false, this.song);
    },
    setSongPlay() {
      if (!this.song.id) return;
      this.isPlaying = true;
      this.isPause = false;
      this.audio.play();
    },
    setSongPause() {
      if (!this.song.id) return;
      this.isPlaying = false;
      this.isPause = true;
      this.audio.pause();
    },
    pushPlayerList(replace: boolean, ...list: ISongDetail[]) {
      if (replace) {
        this.playList = list;
        return;
      }
      list.forEach((song) => {
        if (this.playList.filter((s) => s.id == song.id).length <= 0) {
          this.playList.push(song);
        }
      });
    },
    clearPlayList() {
      this.url = "";
      this.currentTime = 0;
      this.sliderInput = false;
      this.isPlaying = false;
      this.isPause = true;
      this.muted = false;
      this.playList = [] as ISongDetail[];
      this.id = 0;
      this.song = {} as ISongDetail;
      this.songUrl = {} as ISongUrlChild;
      this.showPlayList = false;
      this.audio.load();
      setTimeout(() => {
        this.duration = 0;
      }, 500);
    },
    interval() {
      if (this.isPlaying && !this.sliderInput) {
        this.currentTime = parseInt(this.audio.currentTime.toString());
        this.duration = parseInt(this.audio.duration.toString());
        this.isEnd = this.audio.ended;
      }
    },
  },
});

export const usePlayerInit = () => {
  let timer: NodeJS.Timer;
  const { init, interval, playerEnd } = usePlayerStore();
  const { isEnd } = storeToRefs(usePlayerStore());

  watch(isEnd, (ended) => {
    if (!ended) return;
    playerEnd();
  });
  onMounted(() => {
    init();
    console.log("启动定时器");
    timer = setInterval(interval, 1000);
  });

  onUnmounted(() => {
    console.log("清除定时器");
    clearInterval(timer);
  });
};
