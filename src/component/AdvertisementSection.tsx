import { AiFillAccountBook } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoBook, IoTime } from "react-icons/io5";

const AdvertisementSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-10">
      <div className="flex items-center space-x-1">
        <IoTime className="text-gray-500" size={30}></IoTime>
        <h1 className="text-2xl text-gray-500">Real-Time Availability</h1>
      </div>
      <div className="flex items-center space-x-1">
        <IoBook className="text-gray-500" size={30}></IoBook>
        <h1 className="text-2xl text-gray-500">Instant Booking Confirmation</h1>
      </div>
      <div className="flex items-center space-x-1">
        <AiFillAccountBook
          className="text-gray-500"
          size={30}
        ></AiFillAccountBook>
        <h1 className="text-2xl text-gray-500">Flexible Scheduling</h1>
      </div>
      <div className="flex items-center space-x-1">
        <BiSupport className="text-gray-500" size={30}></BiSupport>
        <h1 className="text-2xl text-gray-500">24/7 Support</h1>
      </div>
    </div>
  );
};

export default AdvertisementSection;
