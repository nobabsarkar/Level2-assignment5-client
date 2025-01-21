import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { FormEvent } from "react";
import { setEmail, setPassword } from "../redux/features/LoginSlice";
import { toast } from "sonner";
import { setUser } from "../redux/features/MeetingRoom";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const [login] = useLoginMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = await login({ email, password }).unwrap();

    const user = verifyToken(data.data.accessToken);

    if (data.success) {
      dispatch(setUser({ user: user, token: data.data.accessToken }));
      toast(data?.message);
      navigate("/");
    }

    // if (data.success) {
    //   dispatch(setUser(toast(data?.message)));
    //   navigate("/");
    // }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-2/3">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onClick={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onChange={(e) => dispatch(setEmail(e.target.value))}
                value={email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                onChange={(e) => dispatch(setPassword(e.target.value))}
                value={password}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                Login
              </button>
            </div>
            <p className="text-center mt-2">
              Are you new please?
              <Link className="text-pink-500 font-bold" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
