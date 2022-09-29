import type { CountryData } from "@/modules/apiDataType/countryData";
import type {
  SearchHotData,
  searchSuggest,
} from "@/modules/apiDataType/searchData";
import type {
  IQrCode,
  IUserInfo,
  IUserInfoQR,
} from "@/modules/apiDataType/userData";
import type { IBanner } from "@/modules/apiDataType/BannerData";
import type {
  INewSong,
  IPersonalized,
  IPersonalizedMv,
  ISongUrl,
  ITopList,
} from "@/modules/apiDataType/musicData";
import type { ISongDetail } from "@/modules/apiDataType/SongDetail";
import type {
  IArtistMv,
  IMv,
  IVideo,
  IVideoGroup,
  IVideoUrl,
  Video,
} from "@/modules/apiDataType/videoData";
import type { PlayListDetail } from "@/modules/apiDataType/playListData";
import type { IArtist, IArtistDetail } from "@/modules/apiDataType/artist";
import type { IAlbum } from "@/modules/apiDataType/album";
import type {
  IIntroduction,
  ITopic,
  ITopicTopic,
} from "@/modules/apiDataType/descData";
import type { ITag, PlaylistHighQuality } from "@/modules/apiDataType/tags";

const apiList = {
  "countries/code/list": "/countries/code/list",
  "/search/hot/detail": "/search/hot/detail",
  "/search/suggest": "/search/suggest",
  "/login/cellphone": "/login/cellphone",
  "/login/qr/key": "/login/qr/key",
  "/login/qr/create": "/login/qr/create",
  "/login/qr/check": "/login/qr/check",
  "/login/status": "/login/status",
  "/banner": "/banner",
  "/personalized": "/personalized",
  "/personalized/newsong": "/personalized/newsong",
  "/personalized/mv": "/personalized/mv",
  "/song/url": "/song/url",
  "/song/detail": "/song/detail",
  "/personalized/privatecontent/list": "/personalized/privatecontent/list",
  "/mv/url": "/mv/url",
  "/toplist/detail": "/toplist/detail",
  "/playlist/detail": "/playlist/detail",
  "/playlist/track/all": "playlist/track/all",
  "/artist/detail": "/artist/detail",
  "/artist/songs": "/artist/songs",
  "/artist/album": "/artist/album",
  "/album": "album",
  "/artist/desc": "/artist/desc",
  "/artist/mv": "/artist/mv",
  "/artist/list": "/artist/list",
  "/playlist/highquality/tags": "/playlist/highquality/tags",
  "/top/playlist/highquality": "/top/playlist/highquality",
  "/video/group/list": "/video/group/list",
  "/video/timeline/all": "/video/timeline/all",
  "/video/url": "/video/url",
};

export type apiKeyTypes = keyof typeof apiList;

export interface apiKeyDataType {
  "countries/code/list": {
    code: number;
    message: string;
    data: Array<CountryData>;
  };
  "/search/hot/detail": {
    code: number;
    message: string;
    data: SearchHotData[];
  };
  "/search/suggest": {
    code: string;
    result: searchSuggest;
  };
  "/login/cellphone": IUserInfo;
  "/login/qr/key": {
    data: IQrCode;
    code: number;
  };
  "/login/qr/create": {
    code: string;
    data: {
      qrurl: string;
      qrimg: string;
    };
  };
  "/login/qr/check": {
    code: number;
    message: string;
    cookie: any;
  };
  "/login/status": {
    data: IUserInfoQR;
  };
  "/banner": {
    banners: IBanner[];
  };
  "/personalized": {
    hasTaste: boolean;
    code: number;
    category: number;
    result: IPersonalized[];
  };
  "/personalized/newsong": {
    code: number;
    category: number;
    result: INewSong[];
  };
  "/personalized/mv": {
    code: number;
    category: number;
    result: IPersonalizedMv[];
  };
  "/song/url": {
    code: number;
    data: ISongUrl;
  };
  "/song/detail": {
    code: number;
    songs: ISongDetail[];
    privileges: any[];
  };
  "/personalized/privatecontent/list": {
    code: number;
    result: IVideo[];
  };
  "/mv/url": {
    code: number;
    data: IMv;
  };
  "/toplist/detail": {
    code: number;
    list: ITopList[];
  };
  "/playlist/detail": {
    code: number;
    urls: any;
    privileges: any[];
    relatedVideos: any;
    playlist: PlayListDetail;
    resEntrance: any;
    sharedPrivilege: any;
  };
  "/playlist/track/all": {
    code: number;
    songs: ISongDetail[];
  };
  "/artist/detail": {
    code: number;
    message: string;
    data: IArtistDetail;
  };
  "/artist/songs": {
    songs: ISongDetail[];
  };
  "/artist/album": {
    artist: IArtistDetail;
    more: boolean;
    code: number;
    hotAlbums: IAlbum[];
  };
  "/album": {
    resourceState: boolean;
    songs: ISongDetail[];
    album: IAlbum;
    code: number;
  };
  "/artist/desc": {
    code: number;
    introduction: IIntroduction[];
    topicData: ITopic;
    briefDesc: string;
    count: number;
  };
  "/artist/mv": {
    mvs: IArtistMv[];
  };
  "/artist/list": {
    code: number;
    more: boolean;
    artists: IArtist[];
  };
  "/playlist/highquality/tags": {
    code: number;
    tags: ITag[];
  };
  "/top/playlist/highquality": {
    code: number;
    more: boolean;
    lasttime: number;
    total: number;
    playlists: PlaylistHighQuality[];
  };
  "/video/group/list": {
    code: number;
    message: string;
    data: IVideoGroup[];
  };
  "/video/timeline/all": {
    msg: string;
    code: number;
    hasmore: boolean;
    datas: Video[];
  };
  "/video/url": {
    urls: IVideoUrl[];
    code: number;
  };
}

export default apiList;
