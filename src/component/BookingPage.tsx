import "react-datepicker/dist/react-datepicker.css";
import { useCurrentUser } from "../redux/api/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const BookingPage = () => {
  // const [startDate, setStartDate] = useState(new Date());

  const userData = useAppSelector(useCurrentUser);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left border-2">
          {/* <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          /> */}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="email"
                placeholder="name"
                className="input input-bordered"
                // defaultValue={userData?.name}
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                defaultValue={userData?.email}
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
