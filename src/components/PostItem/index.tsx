import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { LABEL_COLORS_MAPPING } from "../../constants";
import { IRecentPost } from "../../types";
import { handleGetDate } from "../../utils";

interface IProps extends IRecentPost {
  postId: number;
}

const PostItem = ({
  postId,
  imageUrl,
  title,
  content,
  categories,
  createdAt,
  user,
}: IProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        "col-xs-12 col-sm-12 col-md-4 d-flex flex-column gap-4"
      )}
    >
      <img
        src={imageUrl}
        className="imagePost rounded card-img-top h-100"
        alt="img"
        role="button"
        onClick={() => navigate(`/blog-detail/${postId}`)}
      />

      <div className="d-mt-32 d-ps-20 d-pe-20 card-body">
        <div className="d-flex gap-2 d-mb-16">
          <span
            style={{ letterSpacing: "2px" }}
            className={classNames(
              "d-ps-8 d-pe-8 d-pt-4 d-pb-4 d-fs-10 text-white rounded text-uppercase fw-bold",
              LABEL_COLORS_MAPPING?.[categories]
            )}
          >
            {categories}
          </span>
        </div>
        <h5 className="postTitle card-title fs-4 fw-bold lh-base">{title}</h5>
        <div className="card-text d-mt-28 d-flex align-items-center gap-1">
          <small className="lightTextColor fw-light">By</small>
          <small>{user?.firstName + " " + user?.lastName}</small>
          <small className="lightTextColor fw-light">
            - {handleGetDate(createdAt)}
          </small>
        </div>
        <p className="postDes card-text d-mt-28 fs-6 fw-light">{content}</p>
        <div
          className="btnReadMore p-0 fw-light"
          role="button"
          onClick={() => navigate(`/blog-detail/${postId}`)}
        >
          Read more
        </div>
      </div>
    </div>
  );
};

export default PostItem;
