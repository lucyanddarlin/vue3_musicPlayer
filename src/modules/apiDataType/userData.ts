export interface ILoginForm {
  phone: string;
  password: string;
}

export interface IQrCode {
  code: number;
  unikey: string;
}

export interface IUserInfo {
  loginType: number;
  code: number;
  account: IUserInfoAccount;
  token: string;
  profile: IUserInfoProfile;
  bindings: IUserInfoBindings[];
  cookie: string;
}
export interface IUserInfoQR {
  code: number;
  account: IUserInfoQRAccount;
  profile: IUserInfoQRProfile;
}
export interface IUserInfoQRAccount {
  id: number;
  userName: string;
  type: number;
  status: number;
  whitelistAuthority: number;
  createTime: number;
  tokenVersion: number;
  ban: number;
  baoyueVersion: number;
  donateVersion: number;
  vipType: number;
  anonimousUser: boolean;
  paidFee: boolean;
}
export interface IUserInfoQRProfile {
  userId: number;
  userType: number;
  nickname: string;
  avatarImgId: number;
  avatarUrl: string;
  backgroundImgId: number;
  backgroundUrl: string;
  signature: string;
  createTime: number;
  userName: string;
  accountType: number;
  shortUserName: string;
  birthday: number;
  authority: number;
  gender: number;
  accountStatus: number;
  province: number;
  city: number;
  authStatus: number;
  description?: any;
  detailDescription?: any;
  defaultAvatar: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  locationStatus: number;
  vipType: number;
  followed: boolean;
  mutual: boolean;
  authenticated: boolean;
  lastLoginTime: number;
  lastLoginIP: string;
  remarkName?: any;
  viptypeVersion: number;
  authenticationTypes: number;
  avatarDetail?: any;
  anchor: boolean;
}
export interface IUserInfoAccount {
  id: number;
  userName: string;
  type: number;
  status: number;
  whitelistAuthority: number;
  createTime: number;
  salt: string;
  tokenVersion: number;
  ban: number;
  baoyueVersion: number;
  donateVersion: number;
  vipType: number;
  viptypeVersion: number;
  anonimousUser: boolean;
  uninitialized: boolean;
}
export interface IUserInfoProfileExperts {}
export interface IUserInfoProfile {
  backgroundImgIdStr: string;
  userId: number;
  detailDescription: string;
  userType: number;
  avatarImgIdStr: string;
  vipType: number;
  nickname: string;
  birthday: number;
  gender: number;
  province: number;
  city: number;
  avatarImgId: number;
  backgroundImgId: number;
  followed: boolean;
  backgroundUrl: string;
  accountStatus: number;
  avatarUrl: string;
  defaultAvatar: boolean;
  expertTags?: any;
  experts: IUserInfoProfileExperts;
  mutual: boolean;
  remarkName?: any;
  authStatus: number;
  djStatus: number;
  description: string;
  signature: string;
  authority: number;
  avatarImgId_str: string;
  followeds: number;
  follows: number;
  eventCount: number;
  avatarDetail?: any;
  playlistCount: number;
  playlistBeSubscribedCount: number;
}
export interface IUserInfoBindings {
  userId: number;
  url: string;
  expired: boolean;
  refreshTime: number;
  bindingTime: number;
  tokenJsonStr: string;
  expiresIn: number;
  id: number;
  type: number;
}
