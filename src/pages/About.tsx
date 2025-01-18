import meetingImg from "../assets/meetingImg.jpg";
import img1 from "../assets/tem/1.avif";
import img2 from "../assets/tem/2.jpg";
import img3 from "../assets/tem/3.webp";
import img4 from "../assets/tem/4.avif";

const About = () => {
  return (
    <>
      <div className="hero max-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <div className="lg:w-[50%] mx-auto ">
            <img
              src={meetingImg}
              className="rounded-lg shadow-2xl skew-y-6 lg:w-[90%] "
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <h1 className="text-5xl font-bold">Our Mission.</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-3xl font-semibold text-center">Meet the Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img className="" src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ethan Carter</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <button className=" btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full ">
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Olivia Bennett</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img src={img3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Liam Anderson</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img src={img4} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sophia Morgan</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
