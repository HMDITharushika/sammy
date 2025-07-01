import image from "../assets/about-us.png";

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 gap-10 py-20 bg-[#F9F9F9]">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt="Spices and Ingredients"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 lg:-ml-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-snug">
          Discover the Finest Pepper <br /> and Cinnamon Powder
        </h2>
        <p className="text-base text-gray-600 leading-relaxed max-w-xl">
          At Sammy England, we specialize in sourcing the highest quality black pepper, white pepper, and cinnamon powder from the finest spice-producing regions worldwide. Our spices are meticulously selected to ensure freshness, flavor, and health benefits.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
