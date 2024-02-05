import { useParams } from "react-router-dom";
import useFetchDetailPost from "../../hooks/Posts/useFetchDetailPost";
import "./styles.scss";
import classNames from "classnames";
import { LABEL_COLORS_MAPPING } from "../../constants";
import { handleGetDate } from "../../utils";
import LoadingParagraph from "../../components/LoadingParagraph";

const Detail = () => {
  const { id = "" } = useParams();
  const { data, isFetching } = useFetchDetailPost(id);

  if (isFetching) return <LoadingParagraph />;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="detailBanner"
      >
        <div className="content">
          <span
            style={{ letterSpacing: "2px" }}
            className={classNames(
              "d-ps-8 d-pe-8 d-pt-4 d-pb-4 d-fs-10 text-white rounded text-uppercase fw-bold",
              LABEL_COLORS_MAPPING?.[data?.categories]
            )}
          >
            {data?.categories}
          </span>
          <h5 className="title card-title text-white fw-medium mt-3">
            {data?.title}
          </h5>
          <div className="card-text d-mt-28 d-flex align-items-center justify-content-center gap-1">
            <small className="text-white fw-light">By</small>
            <small className="text-white">
              {data?.user?.firstName + " " + data?.user?.lastName}
            </small>{" "}
            <div className="text-white">-</div>
            <small className="text-white fw-light">
              {handleGetDate(data?.createdAt as Date)}
            </small>
          </div>
        </div>
      </div>

      <div className="h-container d-mt-80 d-pb-80">
        <p className="blogContent d-mb-64 fs-6 fw-light">{data?.content}</p>
        <div className="blogContent fs-6 fw-light d-flex align-items-center gap-2">
          Categories:
          <span className="p-0 btn text-capitalize text-primary">
            {data?.categories}
          </span>
          Tags:
          <span className="p-0 btn text-lowercase text-primary">
            #{data?.categories}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
