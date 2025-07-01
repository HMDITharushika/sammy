const SpiceCard = ({ project, className }) => {
  return (
    <div>
      <div className={`p-4 shadow-md flex flex-col items-center bg-white ${className}`}>
        {/* Circle container with border */}
        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h3 className="mt-4 text-2xl font-bold tracking-tighter text-center">
        {project.title}
      </h3>

      <div className="flex justify-center py-4">
        <a
          href={project.link}
          className={`border px-4 py-2 mx-3 rounded-md text-sm font-semibold hover:bg-gray-100 ${className} `}
        >
          See More
        </a>
      </div>
    </div>

  );
};

export default SpiceCard;
