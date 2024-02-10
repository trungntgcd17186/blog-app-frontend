import { useState } from "react";
import useFetchListRecentPost from "../../hooks/Posts/useFetchListRecentPost";
import useDebounce from "../../hooks/useDebounce";
import { IFilter, IRecentPost } from "../../types";
import LoadingParagraph from "../LoadingParagraph";
import Pagination from "../Pagination";
import PostItem from "../PostItem";
import "./style.scss";

const ITEMS_PER_PAGE = 6;

const RecentPosts = () => {
  const [filter, setFilter] = useState<IFilter>({
    page: 1,
    limit: ITEMS_PER_PAGE,
    title: null,
    content: null,
    categories: null,
  });

  const { page, limit, title, content, categories } = filter;
  const debouncedTitle = useDebounce(title, 500);
  const debouncedContent = useDebounce(content, 500);

  const { data: { list = [], total } = {}, isFetching } =
    useFetchListRecentPost({
      page,
      limit,
      title: debouncedTitle,
      content: debouncedContent,
      categories,
    });

  const handleFilter = (key: string, value: number | string | null) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  return (
    <div className="h-container recentPostContainer">
      <h2 className="d-mt-0 fs-2 fw-medium">Recent Posts</h2>
      <div className="mt-0 row gy-5">
        {isFetching ? (
          <LoadingParagraph />
        ) : (
          <>
            {total ? (
              <>
                {list?.map((post: IRecentPost) => (
                  <PostItem
                    {...post}
                    key={post?.id}
                    postId={post?.id}
                  />
                ))}
              </>
            ) : (
              <div>Empty</div>
            )}
          </>
        )}
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <Pagination
          totalPage={Math.ceil(total / ITEMS_PER_PAGE)}
          onPageChange={(p) => handleFilter("page", p)}
          currentPage={page || 1}
        />
      </div>
    </div>
  );
};

export default RecentPosts;
