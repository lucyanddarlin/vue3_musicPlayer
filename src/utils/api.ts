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
import type { IIntroduction, ITopic } from "@/modules/apiDataType/descData";
import type { ITag, PlaylistHighQuality } from "@/modules/apiDataType/tags";

export type apiKeyTypes = keyof apiKeyDataType;

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
