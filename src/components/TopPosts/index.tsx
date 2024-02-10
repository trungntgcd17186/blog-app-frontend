import classNames from "classnames";
import { TOP_POSTS } from "../../constants/topPosts";
import { IPost } from "../../types";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const TopPosts = () => {
  const navigate = useNavigate();
  const leftPosts = [TOP_POSTS[0], TOP_POSTS[1]];
  const centerPost = TOP_POSTS[2];
  const rightPosts = [TOP_POSTS[3], TOP_POSTS[4]];

  const renderColumn = (posts: IPost[]) => {
    return (
      <div className={"postWrapper col-md-4 d-flex flex-column gap-4"}>
        {posts.map((post: IPost) => (
          <div
            key={post.id}
            className={classNames("cardWrapper card", {
              cardCenter: posts.length === 1,
            })}
            role="button"
            onClick={() => navigate(`/blog-detail/${post.id}`)}
          >
            <img src={post.img} className="card-img h-100 object-fit-cover" alt="img" />
            <div className="p-3 position-absolute bottom-0 z-2">
              <h5 className="card-title text-white">{post.title}</h5>
              <p className="card-text text-white text-opacity-50">
                <small>{post.date}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-light m-auto">
      <div className="h-container topPostContainer">
        <h2 className="m-0 fs-2 fw-medium">Top Posts</h2>
        <div className="row mt-4 g-4">
          {renderColumn(leftPosts)}
          {renderColumn([centerPost])}
          {renderColumn(rightPosts)}
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
