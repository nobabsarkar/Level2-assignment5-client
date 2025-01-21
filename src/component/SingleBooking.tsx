import { useParams } from "react-router-dom";
import { useSingleMeetingQuery } from "../redux/api/auth/authApi";

const SingleBooking = () => {
  //   const { id: _id } = useParams();
  const { data } = useSingleMeetingQuery([]);
  console.log(data);

  return (
    <div>
      <h1>single booking</h1>
    </div>
  );
};

export default SingleBooking;
