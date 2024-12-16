import { instance } from "../../../user/src/apis/axios";

const router = "/auth";

export const Logout = async (data) => {
  return await instance.post(`${router}`, data);
};

export const Reissue = async (data) => {
  const response = await instance.patch(`${router}`, data);
  return response.data;
};
