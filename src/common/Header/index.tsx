import { useNavigate } from "react-router-dom";
import { NAV_OPTIONS } from "../../constants";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="headerContainer p-4 d-flex justify-content-between align-items-center">
      <h3
        className="m-0 fs-4 fw-medium"
        role="button"
        onClick={() => navigate("/")}
      >
        Mini Blog
      </h3>

      <ul className="d-flex align-items-center gap-4 list-unstyled">
        {NAV_OPTIONS.map((option) => (
          <li className="fs-6 fw-bolder" role="button" key={option.id}>
            {option.title}
          </li>
        ))}
        <svg
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </ul>
    </div>
  );
};

export default Header;
