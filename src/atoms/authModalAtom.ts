import { atom } from "recoil";

//typescript
export interface AuthModalState {
  open: boolean;
  view: "login" | "signup" | "resetPassword"; //3중 하나 선택
}

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
