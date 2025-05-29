import axios from "axios";
import { API} from "./getEnv";
import { getCookie } from "cookies-next";

export const instance = () => {
    const token = getCookie('NEXT_TOKEN');
  return axios.create({
    baseURL: API,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};