import { useQuery } from "@tanstack/react-query";
import { getListRecentPost } from "../../services";
import { IFilter } from "../../types";

const useFetchListRecentPost = (params: IFilter = {}) => {
  const { page = 1, limit = 6, title, content, categories } = params;

  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["listRecentPost", page, title, content, categories],
    queryFn: ({ signal }) =>
      getListRecentPost({ page, limit, title, content, categories }, signal),
    refetchOnMount: false,
  });

  return {
    data,
    isFetching,
    isLoading,
    refetch,
  };
};

export default useFetchListRecentPost;
