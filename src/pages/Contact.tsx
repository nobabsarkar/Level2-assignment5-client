import { FaAddressBook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="text-center lg:ml-20 shadow-2xl">
          <div className="card-body">
            <div className="space-y-8">
              <div className="flex space-x-3">
                <MdEmail className="text-indigo-500" size={30}></MdEmail>
                <div>
                  <h1 className="text-2xl text-left">Email</h1>
                  <p>roombooking@gmail.com</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <FaPhone className="text-indigo-500" size={30}></FaPhone>
                <div>
                  <h1 className="text-left">Phone Number</h1>
                  <p>880 1234 567 890</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <FaAddressBook
                  className="text-indigo-500"
                  size={30}
                ></FaAddressBook>
                <div>
                  <h1 className="text-left">Ofice Address</h1>
                  <p className="text-left">Mirpur 1212, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message..."
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
