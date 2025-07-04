import logo from "../assets/logo.png";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {

  return (
    <footer className=" p-10 py-10 border border-black via-30% to-emerald-900 to-90% ..." id="contactus">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <ul className="space-y-2">
            <span>
              <img src={logo} width={100} height={100} />
            </span>
            <span className="italic mb-2 ">
              From Sri Lanka’s Soil to the World’s Table — Where Flavor Meets Tradition and Beyond.
            </span>

            <div className="flex items-center gap-4 text-2xl">
              <a href="https://www.facebook.com/sammyengland/" target="_blank">
                <FaFacebook />
              </a>

              <a href="https://www.linkedin.com/in/sammyengland/" target="_blank">
                <FaLinkedin />
              </a>

              <a href="https://x.com/sammyengland" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/sammyengland/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </ul>
        </div>





      </div>
    </footer>
  );
};

export default Footer;

