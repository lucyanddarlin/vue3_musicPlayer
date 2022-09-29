export interface ISongDetail {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: ISongDetailAr[];
  alia: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: ISongDetailAl;
  dt: number;
  h: ISongDetailH;
  m: ISongDetailM;
  l: ISongDetailL;
  sq: ISongDetailSq;
  hr: ISongDetailHr;
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
  awardTags?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
}
export interface ISongDetailAr {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}
export interface ISongDetailAl {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}
export interface ISongDetailH {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface ISongDetailM {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface ISongDetailL {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface ISongDetailSq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface ISongDetailHr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
