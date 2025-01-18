import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-gray-700 text-white  text-base-content p-10">
      <nav>
        <h6 className="footer-title">Contact Information</h6>
        <a className="link link-hover">roombooking@gmail.com</a>
        <a className="link link-hover">880 1234 567 890</a>
        <a className="link link-hover">Mirpur 1212, Dhaka, Bangladesh</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Media Links</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to="">
            <FaLinkedin size={30}></FaLinkedin>
          </Link>
          <Link to="">
            <FaFacebook size={30}></FaFacebook>
          </Link>
          <Link to="">
            <FaTwitter size={30}></FaTwitter>
          </Link>
          <Link to="">
            <FaInstagram size={30}></FaInstagram>
          </Link>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Additional Links</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service.</a>
      </nav>
    </footer>
  );
};

export default Footer;
