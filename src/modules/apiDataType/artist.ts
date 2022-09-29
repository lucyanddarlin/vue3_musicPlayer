export interface IArtistDetail {
  videoCount: number;
  vipRights: IArtistDetailVipRights;
  identify: IArtistDetailIdentify;
  artist: IArtistDetailArtist;
  blacklist: boolean;
  preferShow: number;
  showPriMsg: boolean;
  secondaryExpertIdentiy: IArtistDetailSecondaryExpertIdentiy[];
  eventCount: number;
  user: IArtistDetailUser;
}
export interface IArtistDetailVipRightsRightsInfoDetailDtoList {
  vipCode: number;
  expireTime: number;
  signIap: boolean;
  sign: boolean;
}
export interface IArtistDetailVipRights {
  rightsInfoDetailDtoList: IArtistDetailVipRightsRightsInfoDetailDtoList[];
  oldProtocol: boolean;
  redVipAnnualCount: number;
}
export interface IArtistDetailIdentify {
  imageUrl: string;
  imageDesc: string;
  actionUrl: string;
}
export interface IArtistDetailArtist {
  id: number;
  cover: string;
  name: string;
  transNames: any[];
  identities: string[];
  identifyTag: string[];
  briefDesc: string;
  rank?: any;
  albumSize: number;
  musicSize: number;
  mvSize: number;
}
export interface IArtistDetailSecondaryExpertIdentiy {
  expertIdentiyId: number;
  expertIdentiyName: string;
  expertIdentiyCount: number;
}
export interface IArtistDetailUserAvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}
export interface IArtistDetailUser {
  backgroundUrl: string;
  birthday: number;
  detailDescription: string;
  authenticated: boolean;
  gender: number;
  city: number;
  signature: string;
  description: string;
  remarkName?: any;
  shortUserName: string;
  accountStatus: number;
  locationStatus: number;
  avatarImgId: number;
  defaultAvatar: boolean;
  province: number;
  nickname: string;
  expertTags?: any;
  djStatus: number;
  avatarUrl: string;
  accountType: number;
  authStatus: number;
  vipType: number;
  userName: string;
  followed: boolean;
  userId: number;
  lastLoginIP: string;
  lastLoginTime: number;
  authenticationTypes: number;
  mutual: boolean;
  createTime: number;
  anchor: boolean;
  authority: number;
  backgroundImgId: number;
  userType: number;
  experts?: any;
  avatarDetail: IArtistDetailUserAvatarDetail;
}

export interface IArtist {
  albumSize: number;
  alias: string[];
  briefDesc: string;
  fansCount: number;
  followed: boolean;
  id: number;
  img1v1Id: number;
  img1v1Id_str: string;
  img1v1Url: string;
  musicSize: number;
  name: string;
  picId: number;
  picId_str: string;
  picUrl: string;
  topicPerson: number;
  trans: string;
}
