import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhone,
} from "../redux/features/RegisterSlice";
import { RootState } from "../redux/store";
import { useSignUpMutation } from "../redux/api/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, phone, address } = useAppSelector(
    (state: RootState) => state.register
  );

  const [signUp] = useSignUpMutation();

  const handleSumit = async (e: FormEvent) => {
    e.preventDefault();
    const user = await signUp({ name, email, password, phone, address });
    if (user.data.success) {
      toast.success(user.data.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-2/3">
        <h1 className="text-4xl font-bold mb-5">Register now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSumit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="input input-bordered"
                onChange={(e) => dispatch(setName(e.target.value))}
                value={name}
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
                onChange={(e) => dispatch(setPhone(e.target.value))}
                value={phone}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
                onChange={(e) => dispatch(setAddress(e.target.value))}
                value={address}
                required
              />
            </div>
            <div className="form-control mt-6 ">
              <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Register
              </button>
            </div>
            <p className="mt-2 text-center">
              Already have an account please?{" "}
              <Link className="text-pink-500 font-bold" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
