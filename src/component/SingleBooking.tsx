import { Link, useParams } from "react-router-dom";
import { useSingleMeetingQuery } from "../redux/api/auth/authApi";

const SingleBooking = () => {
  const { id } = useParams();
  const { data } = useSingleMeetingQuery(id);

  return (
    <div className="card bg-base-100 w-2/4 shadow-xl my-20 mx-auto">
      <figure>
        <img src={data?.data?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.data?.roomName}</h2>
        <p>Capacity: {data?.data?.capacity} People</p>
        <p>Price: ${data?.data?.pricePerSlot}</p>
        <div className="card-actions justify-end">
          <Link to="/bookingPage">
            <button className="btn text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
