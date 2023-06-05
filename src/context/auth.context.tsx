import { create } from "zustand";

interface User {
  username: string;
  password: string;
}

interface UserStore {
  user: User;
  isUserExist: boolean;
  isLoading: boolean;
  setIsUserExist: () => void;
  setIsUserExistFalse: () => void;
  updateUser: (updatedUser: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    username: "",
    password: "",
  },
  isUserExist: false,
  isLoading: false,
  setIsUserExist: () => set({ isUserExist: true }),
  setIsUserExistFalse: () =>
    set({
      isUserExist: false,
      user: {
        username: "",
        password: "",
      },
    }),
  updateUser: (updatedUser) =>
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        ...updatedUser,
      },
    })),
}));
