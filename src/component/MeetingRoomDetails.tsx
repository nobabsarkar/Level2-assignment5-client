/* eslint-disable @typescript-eslint/no-explicit-any */
const MeetingRoomDetails = ({ data }: any) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={data?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.roomName}</h2>
        <p>Capacity: {data?.capacity} People</p>
        <p>Price: ${data?.pricePerSlot}</p>
        <div className="card-actions">
          <button className="btn text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoomDetails;
