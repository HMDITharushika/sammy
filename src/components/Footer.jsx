import logo from "../assets/logo.png";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const companyInformation = [
    { href: "#", text: "About Us" },
    { href: "#", text: "Leadership Team" },
    { href: "#", text: "Careers" },
    { href: "#", text: "Sustainability Initiatives" },
  ];

  const productServices = [
    { href: "#", text: "Aircraft Design & Manufacturing" },
    { href: "#", text: "Space Exploration Technology" },
    { href: "#", text: "Drone Technology" },
    { href: "#", text: "AI in Aerospace" },
    { href: "#", text: "Aerospace Consultancy" },
  ];

  const support = [
    { href: "#", text: "Help Center" },
    { href: "#", text: "Technical Support" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Training Programs" },
    { href: "#", text: "Partner Support" },
  ];
  return (
    <footer className="mt-20 p-10 py-10 bg-white border border-black via-30% to-emerald-900 to-90% ..." id="contactus">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <ul className="space-y-2">
            <span>
              <img src={logo} width={50} height={50} />
            </span>
            <span className="italic ">
              Advancing Cutting-Edge Solutions for Aviation, Space Exploration,
              and Beyond.
            </span>

            <div className="flex items-center gap-4 text-2xl">
              <a href="https://www.facebook.com/aerotech/" target="_blank">
                <FaFacebook />
              </a>

              <a href="https://www.linkedin.com/in/aerotech/" target="_blank">
                <FaLinkedin />
              </a>

              <a href="https://x.com/aerotech" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/aerotech/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Company Information</h3>
          <ul className="space-y-2">
            {companyInformation.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Products & Services</h3>
          <ul className="space-y-2">
            {productServices.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul> 
         </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            {support.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;

