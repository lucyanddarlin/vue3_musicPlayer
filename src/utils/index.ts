import axios from "@/utils/axios";

export const reqTest = () =>
  axios({
    url: "countries/code/list",
  });

export const reqSearchHotList = () =>
  axios({
    url: "/search/hot/detail",
  });

export const reqSuggestSearch = (keywords: string) =>
  axios({
    url: "/search/suggest",
    data: { keywords },
  });

export const reqGetQrKey = () =>
  axios({
    url: "/login/qr/key",
  });

export const reqCreateQr = (qrKey: string) =>
  axios({
    url: "/login/qr/create",
    data: { key: qrKey, qrimg: true },
  });

export const reqCheckQr = (qrKey: string) =>
  axios({
    url: "/login/qr/check",
    data: { key: qrKey },
  });

export const reqUserLogin = (phone: string, password: string) =>
  axios({
    url: "/login/cellphone",
    method: "POST",
    data: { phone, password },
  });

export const reqGetLoginStatus = () =>
  axios({
    url: "/login/status",
    method: "POST",
  });

export const reqGetBannerList = () =>
  axios({
    url: "/banner",
    data: { type: 1 },
  });

export const reqGetPersonalizeList = () =>
  axios({
    url: "/personalized",
  });

export const reqGetNewSongList = () =>
  axios({
    url: "/personalized/newsong",
  });

export const reqGetPersonalizedMv = () =>
  axios({
    url: "/personalized/mv",
  });

export const reqGetSongUrl = (id: number) =>
  axios({
    url: "/song/url",
    data: { id },
  });

export const reqGetSongDetail = (id: number) =>
  axios({
    url: "/song/detail",
    data: { ids: id },
  });

export const reqGetpersonalizedPrivateContent = (
  limit: number = 10,
  offset: number = 0
) =>
  axios({
    url: "/personalized/privatecontent/list",
    data: { limit, offset },
  });

export const reqGetMvUrl = (id: number) =>
  axios({
    url: "/mv/url",
    data: { id },
  });

export const reqGetTopList = () =>
  axios({
    url: "/toplist/detail",
  });

export const reqGetPlayDetail = (id: number) =>
  axios({
    url: "/playlist/detail",
    data: { id },
  });

export const reqGetPlayListAllSongs = (id: number) =>
  axios({
    url: "/playlist/track/all",
    data: { id },
  });

export const reqGetArtistDetail = (id: number) =>
  axios({
    url: "/artist/detail",
    data: { id },
  });

export const reqGetArtistAllSongs = (
  id: number,
  order: string = "time",
  limit: number = 10,
  offset: number = 0
) =>
  axios({
    url: "/artist/songs",
    data: { id, order, limit, offset },
  });

export const reqGetAllAlbum = (
  id: number,
  limit: number = 40,
  offset: number = 0
) =>
  axios({
    url: "/artist/album",
    data: { id, limit, offset },
  });

export const reqGetAlbumInfo = (id: number) =>
  axios({
    url: "/album",
    data: { id },
  });

export const reqGetArtistDesc = (id: number) =>
  axios({
    url: "/artist/desc",
    data: { id },
  });

export const reqGetArtistMv = (
  id: number,
  limit: number = 40,
  offset: number = 0
) =>
  axios({
    url: "/artist/mv",
    data: { id, limit, offset },
  });

export const reqGetArtistList = (data: {
  type: number;
  area: number;
  initial: string;
  page: number;
  limit: number;
}) =>
  axios({
    url: "/artist/list",
    data: { ...data, offset: data.page * data.limit },
  });

export const reqGetAllTags = () =>
  axios({
    url: "/playlist/highquality/tags",
  });

export const reqGetHighPlayList = (
  cat: string,
  limit: number = 30,
  before?: number
) =>
  axios({
    url: "/top/playlist/highquality",
    data: {
      cat,
      limit,
      before,
    },
  });

export const reqGetVideoGroupList = () =>
  axios({
    url: "/video/group/list",
  });

export const reqGetTimeLineVideo = (id: number, offset: number = 0) =>
  axios({
    url: "/video/timeline/all",
    data: { id, offset },
  });

export const reqGetVideoUrl = (id: number) =>
  axios({
    url: "/video/url",
    data: { id },
  });
