import img1 from "../assets/howItWork/img1.jpg";
import img2 from "../assets/howItWork/img2.png";
import img3 from "../assets/howItWork/img3.png";

const HowItWork = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 text-center ">How It Works</h1>
      <div className="shadow-xl border p-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-36">
        <div className="flex items-center">
          <img style={{ width: "50px" }} src={img1} alt="" />
          <h1 className="text-3xl ml-2">Select a Room</h1>
        </div>
        <div className="flex items-center">
          <img style={{ width: "50px" }} src={img2} alt="" />
          <h1 className="text-3xl ml-2">Choose Date & Time</h1>
        </div>
        <div className="flex items-center">
          <img style={{ width: "50px" }} src={img3} alt="" />
          <h1 className="text-3xl ml-2">Confirm Booking</h1>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
