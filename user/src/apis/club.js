import { instance } from "./axios";

const router = "/club";

export const getClub = async () => {
  const response = await instance.get(`${router}/all`);
  return response.data;
};

export const getClubDetail = async (clubname) => {
  const response = await instance.get(`${router}/info/${clubname}`);
  return response.data;
};