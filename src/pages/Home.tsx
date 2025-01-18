import AdvertisementSection from "../component/AdvertisementSection";
import RoomCard from "../component/RoomCard";
import Testimonials from "../component/Testimonials";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisementSection></AdvertisementSection>
      <RoomCard></RoomCard>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
