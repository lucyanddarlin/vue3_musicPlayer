export interface IBanner {
  pic: string;
  targetId: number;
  adid?: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: any;
  adurlV2?: any;
  exclusive: boolean;
  monitorImpress?: any;
  monitorClick?: any;
  monitorType?: any;
  monitorImpressList: any[];
  monitorClickList: any[];
  monitorBlackList?: any;
  extMonitor?: any;
  extMonitorInfo?: any;
  adSource?: any;
  adLocation?: any;
  encodeId: string;
  program?: any;
  event?: any;
  video?: any;
  dynamicVideoData?: any;
  song: IBannerSong;
  bannerId: string;
  alg: string;
  scm: string;
  requestId: string;
  showAdTag: boolean;
  pid?: any;
  showContext?: any;
  adDispatchJson?: any;
  s_ctrp: string;
  logContext?: any;
}
export interface IBannerSongAr {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}
export interface IBannerSongAl {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}
export interface IBannerSongH {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface IBannerSongM {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface IBannerSongL {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface IBannerSongSq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface IBannerSongHr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface IBannerSongPrivilegeFreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
}
export interface IBannerSongPrivilegeChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}
export interface IBannerSongPrivilege {
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
  freeTrialPrivilege: IBannerSongPrivilegeFreeTrialPrivilege;
  chargeInfoList: IBannerSongPrivilegeChargeInfoList[];
}
export interface IBannerSong {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: IBannerSongAr[];
  alia: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: IBannerSongAl;
  dt: number;
  h: IBannerSongH;
  m: IBannerSongM;
  l: IBannerSongL;
  sq: IBannerSongSq;
  hr: IBannerSongHr;
  a?: any;
  cd: string;
  no: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  tagPicList?: any;
  resourceState: boolean;
  version: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  privilege: IBannerSongPrivilege;
  alg: string;
}
