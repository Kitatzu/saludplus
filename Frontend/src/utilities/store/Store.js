import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchAvailableDoctors, fetchSpecialities } from "../request/axios";

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

export const useDoctorsStore = create((set) => {
  return {
    doctors: [],
    specialities: [],
    isLoading: true,
    setSpecialities: async () => {
      try {
        const res = await fetchSpecialities();
        if (!res.data || !res.data.length === 0) {
          return console.log("AYUDAME");
        }

        set((state) => ({
          specialities: res.data,
          isLoading: false,
        }));
      } catch (error) {
        console.log(error);
      }
    },
    setDoctors: async (speciality) => {
      try {
        const res = await fetchAvailableDoctors(speciality);
        if (!res.data || !res.data.length === 0) {
          return console.log("AYUDAME");
        }

        set((state) => ({
          doctors: res.data,
        }));
      } catch (error) {
        console.log(error);
      }
    },
  };
});
