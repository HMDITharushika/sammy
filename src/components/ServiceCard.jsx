const ServiceCard = ({ project, className }) => {
  return (
    <div className={`p-4 shadow-md ${className}`}>
      <img
        src={project.image}
        alt={project.title}
        className="mx-auto w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter text-center">
          {project.title}
        </h3>
        <p className="text-sm text-justify pt-4">{project.description}</p>
      </div>

    </div>
  );
};

export default ServiceCard;
