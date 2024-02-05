import { useState } from "react";
import { Categories } from "../../constants";
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
    <div className="h-container row  gy-5 d-mt-80 d-pb-80">
      <h2 className="d-mt-0 mb-4 fs-2 fw-medium">Recent Posts</h2>

      <div className="row col-12 mb-4">
        <div className="col-4">
          <input
            type="search"
            className="form-control"
            placeholder="Find by title"
            aria-label="title"
            value={title || ""}
            onChange={(e) => handleFilter("title", e.target.value)}
          />
        </div>

        <div className="col-4">
          <input
            type="search"
            className="form-control col-4"
            placeholder="Find by content"
            aria-label="content"
            value={content || ""}
            onChange={(e) => handleFilter("content", e.target.value)}
          />
        </div>

        <div className="col-4">
          <select
            className="form-select"
            onChange={(e) => {
              handleFilter(
                "categories",
                e.target.value === "all" ? null : e.target.value
              );
            }}
          >
            <option key="all" className="text-capitalize fs-6 fw-light">
              all
            </option>
            {Object.keys(Categories).map((option) => (
              <option
                key={option}
                className="text-capitalize fs-6 fw-light"
                value={option.toLowerCase()}
              >
                {option.toLowerCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-0 row gx-4 gy-5 w-100">
        {isFetching ? (
          <LoadingParagraph />
        ) : (
          <>
            {total ? (
              <>
                {list?.map((post: IRecentPost, i: number) => (
                  <PostItem
                    {...post}
                    key={post?.id}
                    postId={post?.id}
                    index={i}
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
