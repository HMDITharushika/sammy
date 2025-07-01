import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.jpg";

import ServiceCard from "./ServiceCard";

const Services = () => {
  const SERVICES = [
    {
      image: image1,
      title: "Certified Quality Spices for Your Kitchen",
      description:
        "Experience the rich flavors and health benefits of our meticulously sourced spices.",
    },
    {
      image: image2,
      title: "Enhance Your Culinary Experience with Our Spices",
      description:
        "Add a touch of excellence to your dishes with our premium spices.",
    },
    {
      image: image2,
      title: "Discover the World of Exquisite Spices",
      description:
        "Trust in our certifications for quality and authenticity.",
    },
  ];
  return (
    <div>
      <section className="container mx-auto p-9" id="services">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl font-bold ">
          Sourcing the Finest Spices for Your Health
        </h2>

        <p className="text-center p-8" >Sammy England, we take pride in sourcing the healthiest and highest quality black pepper, white pepper, and cinnamon powder. Our meticulous selection process ensures that you receive only the finest spices from the best spice-producing regions worldwide.</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
          {SERVICES.map((project, index) => (
            <ServiceCard
              key={index}
              project={project}
              className="w-full md:w-3/4 lg:w-2/3"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
