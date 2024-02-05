const LoadingParagraph = () => {
  return (
    <div className="h-container container-fluid d-mt-80 d-pb-80">
      <div className="row row gx-1 gy-3">
        {Array.from({ length: 3 }, () => (
          <div className="m-0 placeholder-glow col-4">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingParagraph;
