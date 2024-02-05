import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NAV_OPTIONS } from "../../constants";
import { memoizedSelector } from "../../features/selector/selector";
import { setUserInfo } from "../../features/user/userSlice";
import { getUserData } from "../../services";
import "./styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const userInfo = useSelector(memoizedSelector);

  const handleFetchUser = async () => {
    const res = await getUserData();
    if (res) dispatch(setUserInfo(res));
  };

  useEffect(() => {
    handleFetchUser();
  }, []);

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
          <li
            className="fs-6 fw-bolder"
            role="button"
            key={option.id}
            onClick={() => navigate(option.path)}
          >
            {option.title}
          </li>
        ))}

        <div className="dropdown">
          <div
            className="fs-6 fw-bolder dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {userInfo?.firstName}
          </div>
          <ul
            className={classNames("mt-2 dropdown-menu end-0", {
              show: showDropdown,
            })}
          >
            <li>
              <div
                className="dropdown-item"
                onClick={() => navigate("/profile")}
              >
                View profile
              </div>
            </li>
            <li>
              <a className="dropdown-item" href="/logout">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Header;
