import { instance } from "../../../user/src/apis/axios";

const router = "/auth";

export const Login = async (data) => {
  const response = await instance.post(`${router}`, data);
  return response.data;
};