import image from "../assets/about-us.png";

const AboutUs = () => {
  return (
    
      <section className="flex flex-col lg:flex-row items-center justify-center px-8 gap-10">
      
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt="Descriptive Alt Text"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 text-left">
        <h2 className="text-3xl font-bold mb-4">Discover the Finest Pepper and Cinnamon Powder</h2>
        <p className="text-lg text-gray-700">
          At Sammy England, we specialize in sourcing the highest quality black pepper, white pepper, and cinnamon powder from the finest spice-producing regions worldwide. Our spices are meticulously selected to ensure freshness, flavor, and health benefits.
        </p>
      </div>
      
    </section>
    
  )
}

export default AboutUs
