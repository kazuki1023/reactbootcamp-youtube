// src/stores/AuthCredentialLoaded/index.tsを作成

import { atom } from "recoil";

export type AuthCredentialLoadedType = boolean;

export const AuthCredentialLoaded = atom<AuthCredentialLoadedType>({
  key: "AuthCredentialLoaded",
  default: false,
});