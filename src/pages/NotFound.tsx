import { Link } from "react-router-dom";
import notFound from "../assets/notFound.jpg";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <img className="" src={notFound} alt="" />
      </div>
      <Link className="flex justify-center mt-2" to="/">
        <button className="btn text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Back to Home
        </button>
      </Link>
    </>
  );
};

export default NotFound;
