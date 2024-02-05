import { useQuery } from "@tanstack/react-query";
import { getDetailPost } from "../../services";
import { IRecentPost } from "../../types";

const useFetchDetailPost = (id: string | number) => {
  const { data, isFetching, isLoading } = useQuery<Promise<IRecentPost>>({
    queryKey: ["blogDetail", id],
    queryFn: ({ signal }) => getDetailPost(id, signal),
    enabled: !!id,
    
    refetchOnMount: false,
  });
  return {
    data,
    isFetching,
    isLoading,
  };
};

export default useFetchDetailPost;
