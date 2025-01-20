import { FaSearch } from "react-icons/fa";
import { useMeetingQuery } from "../redux/api/auth/authApi";
import { TMeetingRoom } from "../types";
import MeetingRoomDetails from "./MeetingRoomDetails";

const Booking = () => {
  const data = useMeetingQuery({});

  return (
    <div>
      <div className="join flex justify-center items-center my-10">
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search"
          />
        </div>

        <div className="indicator">
          <button className="btn font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 join-item">
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {data?.data?.data.map((data: TMeetingRoom) => (
          <MeetingRoomDetails key={data?._id} data={data}></MeetingRoomDetails>
        ))}
      </div>
    </div>
  );
};

export default Booking;
