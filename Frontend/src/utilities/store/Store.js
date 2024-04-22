import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => {
      return {
        userToken: "",
        isLogin: false,
        setToken: (token) =>
          set((state) => ({
            userToken: token,
            isLogin: !!token,
          })),
        setIsLogin: (isLogin) =>
          set((state) => ({
            isLogin: isLogin,
          })),
      };
    },
    { name: "authToken" }
  )
);
