export interface IAlbum {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags?: any;
  artists: IAlbumArtists[];
  alias: any[];
  copyrightId: number;
  picId: number;
  artist: IAlbumArtist;
  publishTime: number;
  company?: any;
  briefDesc: string;
  picUrl: string;
  commentThreadId: string;
  pic: number;
  blurPicUrl: string;
  companyId: number;
  description: string;
  tags: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  isSub: boolean;
}
export interface IAlbumArtists {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  alias: any[];
  picId: number;
  musicSize: number;
  albumSize: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}
export interface IAlbumArtist {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  alias: any[];
  picId: number;
  musicSize: number;
  albumSize: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  trans: string;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}
