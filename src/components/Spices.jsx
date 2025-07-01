import image1 from "../assets/black.png";
import image2 from "../assets/cinammon.png";
import image3 from "../assets/white.png";

import SpiceCard from "./SpiceCard";

const Spices = () => {
  const SPICES = [
    {
      image: image1,
      title: "Black Pepper",
      borderColor: "border-[#D1A249]",
      link: "/black-pepper",
    },
    {
      image: image2,
      title: "Cinnamon",
      borderColor: "border-[#A0522D]",
      link: "/cinnamon",
    },
    {
      image: image3,
      title: "White Pepper",
      borderColor: "border-[#C0C0C0]",
      link: "/white-pepper",
    },
  ];


  return (
    <div>
      <section className="container mx-auto p-9 py-16" id="services">
        <div className="pt-4 pb-4 bg-[#5E8F8D] mb-16">
          <h2 className=" text-center text-3xl tracking-tighter lg:text-4xl font-bold ">
            Discover Our Premium Spice Collection
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
          {SPICES.map((project, index) => (
            <SpiceCard
              key={index}
              project={project}
              className={`border-4 rounded-full ${project.borderColor}`}
            />

          ))}
        </div>
      </section>
    </div>
  );
};

export default Spices;
