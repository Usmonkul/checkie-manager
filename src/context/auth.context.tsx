import { create } from "zustand";

export const useUserStore = create((set) => ({
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
  updatedUser: (updatedUser) =>
    set((state) => ({
      user: {
        ...state.user,
        ...updatedUser,
      },
    })),
}));
