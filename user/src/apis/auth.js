import { instance } from "./axios";

const router = "/auth";

export const Signup = async (data) => {
  return await instance.post(`${router}`, data);
};

export const Login = async (data) => {
  return await instance.post(`${router}`, data);
};

export const Logout = async (data) => {
  return await instance.post(`${router}`, data);
};
