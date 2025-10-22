import Card from "../../components/Card";

export default async function Projects() {
  const res = await fetch("http://localhost:3000/api/projects", { cache: "no-store" });
  const projects = await res.json();

  return (
    <>
      <div className="flex flex-col items-center text-center mb-8 px-4">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-mono text-gray-900 mb-2">
          Project Showcase
        </h1>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
          Some of My Projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center px-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            id={project.id}
            imgsrc={project.imgsrc}
          />
        ))}
      </div>
    </>
  );
}
