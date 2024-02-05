import { useQuery } from "@tanstack/react-query";
import axiosIns from "../../api/axios";
import { IRecentPost } from "../../types";

const useFetchDetailPost = (id: string | number) => {
  const { data, isFetching, isLoading } = useQuery<IRecentPost>({
    queryKey: ["blogDetail", id],
    queryFn: () => {
      return axiosIns.get(`/blogs/${id}`);
    },
    refetchOnMount: false,
  });
  return {
    data,
    isFetching,
    isLoading,
  };
};

export default useFetchDetailPost;
