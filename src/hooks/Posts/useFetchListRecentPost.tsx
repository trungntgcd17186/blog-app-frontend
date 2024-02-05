import { useQuery } from "@tanstack/react-query";
import axiosIns from "../../api/axios";

const useFetchListRecentPost = (params = { page: 1, limit: 6 }) => {
  const { page = 1, limit = 6 } = params;
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["listRecentPost", page],
    queryFn: () => {
      return axiosIns.get("/blogs", {
        params: {
          page,
          limit,
        },
      });
    },
    refetchOnMount: false,
  });
  return {
    data,
    isFetching,
    isLoading,
  };
};

export default useFetchListRecentPost;
