import AdvertisementSection from "../component/AdvertisementSection";
import HowItWork from "../component/HowItWork";
import RoomCard from "../component/RoomCard";
import Testimonials from "../component/Testimonials";
import WhyChooseUs from "../component/WhyChooseUs";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisementSection></AdvertisementSection>
      <RoomCard></RoomCard>
      <WhyChooseUs></WhyChooseUs>
      <HowItWork></HowItWork>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
