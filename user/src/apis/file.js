import { instance } from "./axios";

const router = "/file";

export const imageUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await instance.post(`${router}/image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteImage = async (imageUrl) => {
  const body = {
    url: imageUrl,
  };

  const response = await instance.post(`${router}/delete`, body);
  return response.data;
};
