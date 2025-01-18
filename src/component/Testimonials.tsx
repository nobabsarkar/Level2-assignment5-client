import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import testi1 from "../assets/tesimonials/testi1.jpg";
import testi3 from "../assets/tesimonials/testi3.avif";
import testi2 from "../assets/tesimonials/testi2.jpg";
import testi4 from "../assets/tesimonials/testi4.avif";
import testi5 from "../assets/tesimonials/testi5.jpg";

const Testimonials = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-semibold text-center pt-10 mb-10">
        Testimonials
      </h1>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            className=" border p-5 shadow-lg rounded-xl"
            style={{ width: "300px" }}
          >
            <div>
              <img style={{ borderRadius: "100%" }} src={testi1} />
              <h1 className="text-2xl font-semibold my-2">Emma</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex items-center my-3">
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className=" border p-5 shadow-lg rounded-xl"
            style={{ width: "300px" }}
          >
            <div>
              <img style={{ borderRadius: "100%" }} src={testi3} />
              <h1 className="text-2xl font-semibold my-2">Liam</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex items-center my-3">
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className=" border p-5 shadow-lg rounded-xl"
            style={{ width: "300px" }}
          >
            <div>
              <img style={{ borderRadius: "100%" }} src={testi2} />
              <h1 className="text-2xl font-semibold my-2">Sophia</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex items-center my-3">
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className=" border p-5 shadow-lg rounded-xl"
            style={{ width: "300px" }}
          >
            <div>
              <img style={{ borderRadius: "100%" }} src={testi4} />
              <h1 className="text-2xl font-semibold my-2">Ethan</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex items-center my-3">
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className=" border p-5 shadow-lg rounded-xl"
            style={{ width: "300px" }}
          >
            <div>
              <img style={{ borderRadius: "100%" }} src={testi5} />
              <h1 className="text-2xl font-semibold my-2">Mason</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex items-center my-3">
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
                <FaStar className="text-yellow-500 mr-1" size={20}></FaStar>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
