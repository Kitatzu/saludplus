import axios from "axios";

export const axiosUser = axios.create({
  baseURL: `${process.env.API_URL}`,
});
