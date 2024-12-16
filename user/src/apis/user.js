import { instance } from "./axios";

const router = "/user";

export const MyPage = async () => {
  const response = await instance.get(`${router}`);
  return response.data;
};

export const modifyMypage = async (data) => {
    return await instance.patch(`${router}/modify`, data);
  };
  