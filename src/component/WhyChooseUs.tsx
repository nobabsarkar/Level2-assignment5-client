import img1 from "../assets/choose us/img1.png";
import img2 from "../assets/choose us/img2.png";
import img3 from "../assets/choose us/img3.png";
import img4 from "../assets/choose us/img4.png";
import img5 from "../assets/choose us/img5.png";
import img6 from "../assets/choose us/img6.png";
import img7 from "../assets/choose us/img7.png";
import img8 from "../assets/choose us/img8.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Why Choose Us</h1>
        <p>We are provide lot's of facility in our customar</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-36">
        <div className="border py-5">
          <img className="mx-auto" src={img1} alt="" />
          <h1 className="text-2xl mt-3 text-center">Superfast Internet</h1>
        </div>
        <div className="border py-5">
          <img className="mx-auto" src={img2} alt="" />
          <h1 className="text-2xl mt-3 text-center">Modern kitchen</h1>
        </div>
        <div className="border py-5">
          <img className="mx-auto" src={img3} alt="" />
          <h1 className="text-2xl mt-3 text-center">Car Parking</h1>
        </div>
        <div className="border py-5">
          <img className="mx-auto" src={img4} alt="" />
          <h1 className="text-2xl mt-3 text-center">Meeting Rooms</h1>
        </div>
        <div className="border py-5">
          <img className="mx-auto" src={img5} alt="" />
          <h1 className="text-2xl mt-3 text-center">Breakout Spaces</h1>
        </div>
        <div className="border py-5">
          <img className="mx-auto" src={img6} alt="" />
          <h1 className="text-2xl mt-3 text-center">Digital Community</h1>
        </div>
        <div className="border py-5">
          <img className="mx-auto" src={img7} alt="" />
          <h1 className="text-2xl mt-3 text-center">Tea & Coffee</h1>
        </div>
        <div className="border py-5">
          <img className="mx-auto" src={img8} alt="" />
          <h1 className="text-2xl mt-3 text-center">High Security</h1>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
