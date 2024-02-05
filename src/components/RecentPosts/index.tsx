import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { LABEL_COLORS_MAPPING } from "../../constants";
import useFetchListRecentPost from "../../hooks/Posts/useFetchListRecentPost";
import { IRecentPost } from "../../types";
import "./style.scss";
import { handleGetDate } from "../../utils";
import Pagination from "../Pagination";
import { useState } from "react";
import LoadingParagraph from "../LoadingParagraph";

const ITEMS_PER_PAGE = 6;

const RecentPosts = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data: { list = [], total } = {}, isFetching } =
    useFetchListRecentPost({
      page,
      limit: ITEMS_PER_PAGE,
    });

  if (isFetching) return <LoadingParagraph />;

  return (
    <div className="h-container row gx-4 gy-5 d-mt-80 d-pb-80">
      <h2 className="d-mt-0 d-mb-56 fs-2 fw-medium">Recent Posts</h2>

      {list?.map((post: IRecentPost, i: number) => (
        <div
          key={post.id}
          className={classNames("col-md-4 d-flex flex-column gap-4", {
            "m-0": i < 3,
          })}
        >
          <img
            src={post?.imageUrl}
            className="imagePost rounded card-img-top h-100"
            alt="img"
            role="button"
            onClick={() => navigate(`/blog-detail/${post.id}`)}
          />

          <div className="d-mt-32 d-ps-20 d-pe-20 card-body">
            <div className="d-flex gap-2 d-mb-16">
              <span
                style={{ letterSpacing: "2px" }}
                className={classNames(
                  "d-ps-8 d-pe-8 d-pt-4 d-pb-4 d-fs-10 text-white rounded text-uppercase fw-bold",
                  LABEL_COLORS_MAPPING?.[post?.categories]
                )}
              >
                {post?.categories}
              </span>
            </div>
            <h5 className="postTitle card-title fs-4 fw-bold lh-base">
              {post?.title}
            </h5>
            <div className="card-text d-mt-28 d-flex align-items-center gap-1">
              <small className="lightTextColor fw-light">By</small>
              <small>
                {post?.user?.firstName + " " + post?.user?.lastName}
              </small>{" "}
              {" - "}
              <small className="lightTextColor fw-light">
                {handleGetDate(post?.createdAt)}
              </small>
            </div>
            <p className="postDes card-text d-mt-28 fs-6 fw-light">
              {post?.content}
            </p>
            <div
              className="btnReadMore p-0 fw-light"
              role="button"
              onClick={() => navigate(`/blog-detail/${post.id}`)}
            >
              Read more
            </div>
          </div>
        </div>
      ))}

      <div className="mt-5 d-flex justify-content-center">
        <Pagination
          totalPage={Math.ceil(total / ITEMS_PER_PAGE)}
          onPageChange={setPage}
          currentPage={page}
        />
      </div>
    </div>
  );
};

export default RecentPosts;
