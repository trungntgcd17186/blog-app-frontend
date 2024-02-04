import classNames from "classnames";
import { RECENT_POSTS } from "../../constants/recentPosts";
import { ILabel, IRecentPost } from "../../types";
import "./style.scss";

const RecentPosts = () => {
  return (
    <div className="h-container row gx-4 gy-5 d-mt-80 d-pb-80">
      <h2 className="d-mt-0 d-mb-56 fs-2 fw-medium">Recent Posts</h2>

      {RECENT_POSTS.map((post: IRecentPost, i: number) => (
        <div
          key={post.id}
          className={classNames("col-md-4 d-flex flex-column gap-4", {
            "m-0": i < 3,
          })}
        >
          <img
            src={post.img}
            className="rounded card-img-top h-100"
            alt="img"
            role="button"
          />

          <div className="d-mt-32 d-ps-20 d-pe-20 card-body">
            <div className="d-flex gap-2 d-mb-16">
              {post.label.map((label: ILabel) => (
                <span
                  style={{ letterSpacing: "2px", background: label.color }}
                  className="d-ps-8 d-pe-8 d-pt-4 d-pb-4 d-fs-10 text-white rounded text-uppercase fw-bold"
                >
                  {label.name}
                </span>
              ))}
            </div>
            <h5 className="card-title fs-4 fw-bold lh-base">{post.title}</h5>
            <div className="card-text d-mt-28 d-flex align-items-center gap-1">
              <small className="lightTextColor fw-light">By</small>
              <small>{post.createdBy.name}</small> {" - "}
              <small className="lightTextColor fw-light">{post.date}</small>
            </div>
            <p className="card-text postDes d-mt-28 fs-6 fw-light">
              {post.description}
            </p>
            <div className="btnReadMore p-0 fw-light" role="button">
              Read more
            </div>
          </div>
        </div>
      ))}

      <div className="mt-5 d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
