import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/user/userSlice";
import { login } from "../../services/auth";
import { ILogin } from "../../types";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: (body: ILogin) => login(body),
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    const email = e.target?.[0]?.value;
    const password = e.target?.[1]?.value;

    const res = await mutateAsync({
      email,
      password,
    });

    if (res.accessToken && res.userInfo) {
      localStorage.setItem("accessToken", res?.accessToken);
      dispatch(setUserInfo(res?.userInfo));
      navigate("/");
    }
  };
  return (
    <div className="formLogin">
      <h4 className="mb-4">Login</h4>

      <div>email: admin@gmail.com password: 123123</div>
      <div>email: member@gmail.com password: 123123</div>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(e);
        }}
      >
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" name="email" className="form-control" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input name="password" type="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
