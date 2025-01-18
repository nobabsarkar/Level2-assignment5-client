import { Link } from "react-router-dom";
import room1 from "../assets/featuredRoom/room1.jpg";
import room2 from "../assets/featuredRoom/room2.jpg";
import room3 from "../assets/featuredRoom/room3.jpg";
import room4 from "../assets/featuredRoom/room4.jpeg";

const RoomCard = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-semibold mb-10">
        Featured Rooms
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure>
            <img src={room1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Aspire Room</h1>
            <h2>Capacity: 100</h2>
            <h2>Price: $10</h2>
            <h2>Slot: 3</h2>
            <Link to="/booking" className="card-actions">
              <button className="btn text-white w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                See Details
              </button>
            </Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure>
            <img src={room2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Horizon Room</h1>
            <h2>Capacity:200</h2>
            <h2>Price: $20</h2>
            <h2>Slot: 6</h2>
            <Link to="/booking" className="card-actions">
              <button className="btn text-white w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                See Details
              </button>
            </Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure>
            <img src={room3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Elevate Room</h1>
            <h2>Capacity:300</h2>
            <h2>Price: $30</h2>
            <h2>Slot: 9</h2>
            <Link to="/booking" className="card-actions">
              <button className="btn text-white w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                See Details
              </button>
            </Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure>
            <img src={room4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Momentum Room</h1>
            <h2>Capacity: 400</h2>
            <h2>Price: $40</h2>
            <h2>Slot: 12</h2>
            <Link to="/booking" className="card-actions">
              <button className="btn text-white w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
