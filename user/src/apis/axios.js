import axios from "axios";
import { Cookie } from "../Utils/cookie";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    const token = Cookie.get("token");
    if (token) res.headers.Authorization = `${token}`;
    return res;
  },
  (err) => {
    alert("오류가 발생했습니다");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
  }
);