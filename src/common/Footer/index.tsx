import ConnectWithUs from "../../components/ConnectWithUs";
import { FOOTER_NAV_OPTIONS } from "../../constants";
import "./style.scss";

const Footer = () => {
  return (
    <div className="d-pt-80 d-pb-80 footer">
      <div className="h-container">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="text-white mb-4 fs-6">About Us</h5>
            <p className="aboutUs fs-6 fw-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              reprehenderit magnam deleniti quasi saepe, consequatur atque sequi
              delectus dolore.
            </p>
          </div>

          <ul className="list-unstyled d-flex flex-wrap gy-2">
            {FOOTER_NAV_OPTIONS.map((option) => (
              <li
                key={option.id}
                className="footerOptions flex-grow-0 flex-shrink-0 fw-light"
                role="button"
              >
                {option.title}
              </li>
            ))}
          </ul>

          <div>
            <h5 className="text-white mb-4 fs-6">Connect With Us</h5>
            <ConnectWithUs />
          </div>
        </div>

        <div className="text-center d-mt-48">
          Copyright © 2024 All rights reserved | This template is made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-1"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
              stroke-width="0"
              fill="red"
            />
          </svg>
          by <a href="#" className="text-white-50 text-decoration-none">Nal Solutions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
