import { Link } from "react-router-dom";
import bannerImg from "../assets/bannerImg.jpg";

const Banner = () => {
  return (
    <div className="hero">
      <img className="w-full h-[600px] opacity-100" src={bannerImg} alt="" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl font-bold text-white">
            Book Your Ideal Meeting Room with Ease.
          </h1>
          <h3 className="text-2xl font-semibold text-white">
            Efficient, hassle-free room booking for all your meeting needs.
          </h3>
          <Link to="/booking">
            <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-3">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
