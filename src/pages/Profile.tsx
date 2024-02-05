import { useSelector } from "react-redux";
import { memoizedSelector } from "../features/selector/selector";

const Profile = () => {
  const userInfo = useSelector(memoizedSelector);

  return (
    <>
      <div>Profile</div>
      <div>Hi {userInfo?.firstName}</div>
    </>
  );
};

export default Profile;
