import axiosIns from "../api/axios";
import { IFilter } from "../types";

export const getListRecentPost = (
  {
    page = 1,
    limit = 6,
    title = null,
    content = null,
    categories = null,
  }: IFilter,
  signal: AbortSignal
) => {
  return axiosIns.get("/blogs", {
    params: {
      page,
      limit,
      title,
      content,
      categories,
    },
    signal,
  });
};

export const getDetailPost = (id: string | number, signal: AbortSignal) => {
  return axiosIns.get(`/blogs/${id}`, { signal });
};

export const getUserData = () => {
  return axiosIns.get(`/users/me`);
};
