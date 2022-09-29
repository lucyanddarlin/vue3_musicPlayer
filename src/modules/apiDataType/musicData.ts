export interface IPersonalized {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}
export interface IPersonalizedMv {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime?: any;
  duration: number;
  playCount: number;
  subed: boolean;
  artists: IMVArtists[];
  artistName: string;
  artistId: number;
  alg: string;
}
export interface IMVArtists {
  id: number;
  name: string;
}

export interface INewSong {
  id: number;
  type: number;
  name: string;
  copywriter?: any;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime?: any;
  song: INewSongSong;
  alg: string;
}
export interface INewSongSongArtists {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}
export interface INewSongSongAlbumArtist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}
export interface INewSongSongAlbumArtists {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}
export interface INewSongSongAlbum {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: INewSongSongAlbumArtist;
  songs: any[];
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: INewSongSongAlbumArtists[];
  subType: string;
  transName?: any;
  onSale: boolean;
  mark: number;
  gapless: number;
  picId_str: string;
}
export interface INewSongSongSqMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}
export interface INewSongSongHrMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}
export interface INewSongSongBMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}
export interface INewSongSongHMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}
export interface INewSongSongMMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}
export interface INewSongSongLMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}
export interface INewSongSongPrivilegeFreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
}
export interface INewSongSongPrivilegeChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}
export interface INewSongSongPrivilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl?: any;
  freeTrialPrivilege: INewSongSongPrivilegeFreeTrialPrivilege;
  chargeInfoList: INewSongSongPrivilegeChargeInfoList[];
}
export interface INewSongSong {
  name: string;
  id: number;
  position: number;
  alias: any[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: INewSongSongArtists[];
  album: INewSongSongAlbum;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  sqMusic: INewSongSongSqMusic;
  hrMusic: INewSongSongHrMusic;
  ringtone: string;
  crbt?: any;
  audition?: any;
  copyFrom: string;
  commentThreadId: string;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName?: any;
  sign?: any;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mvid: number;
  bMusic: INewSongSongBMusic;
  mp3Url?: any;
  hMusic: INewSongSongHMusic;
  mMusic: INewSongSongMMusic;
  lMusic: INewSongSongLMusic;
  exclusive: boolean;
  privilege: INewSongSongPrivilege;
}
export type ISongUrl = ISongUrlChild[];
export interface ISongUrlChildFreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
}
export interface ISongUrlChildFreeTimeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  type: number;
  remainTime: number;
}
export interface ISongUrlChild {
  id: number;
  url: string;
  br: number;
  size: number;
  md5: string;
  code: number;
  expi: number;
  type: string;
  gain: number;
  fee: number;
  uf?: any;
  payed: number;
  flag: number;
  canExtend: boolean;
  freeTrialInfo?: any;
  level: string;
  encodeType: string;
  freeTrialPrivilege: ISongUrlChildFreeTrialPrivilege;
  freeTimeTrialPrivilege: ISongUrlChildFreeTimeTrialPrivilege;
  urlSource: number;
  rightSource: number;
  podcastCtrp?: any;
  effectTypes?: any;
  time: number;
}

export interface ITopList {
  subscribers: any[];
  subscribed?: any;
  creator?: any;
  artists?: any;
  tracks: ITopListTracks[];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  opRecommend: boolean;
  recommendInfo?: any;
  subscribedCount: number;
  cloudTrackCount: number;
  trackNumberUpdateTime: number;
  userId: number;
  createTime: number;
  highQuality: boolean;
  adType: number;
  anonimous: boolean;
  specialType: number;
  coverImgId: number;
  updateTime: number;
  newImported: boolean;
  coverImgUrl: string;
  totalDuration: number;
  trackCount: number;
  commentThreadId: string;
  trackUpdateTime: number;
  privacy: number;
  playCount: number;
  description: string;
  ordered: boolean;
  tags: any[];
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}
export interface ITopListTracks {
  first: string;
  second: string;
}
