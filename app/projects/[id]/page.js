import Link from "next/link";

export default async function ProjectPage({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/projects/${id}`, { cache: "no-store" });

  if (!res.ok) {
    if (res.status === 404) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-2xl font-bold text-gray-800">Project Not Found</h1>
          <Link
            href="/projects"
            className="mt-4 text-indigo-600 hover:underline"
          >
            Go Back
          </Link>
        </div>
      );
    }
    return <div className="text-center mt-10 text-red-500">An error occurred.</div>;
  }

  const project = await res.json();

  return (
    <>
      <div className="container mx-auto px-5 py-16">
        <article className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>

          <div className="rounded-xl overflow-hidden w-full max-w-3xl mb-6 shadow-lg">
            <img
              alt={project.title}
              className="object-cover object-center w-full h-64 sm:h-80 md:h-96"
              src={project.imgsrc.startsWith("http") ? project.imgsrc : `/${project.imgsrc}`}
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-4">
            {project.description}
          </p>

          <p className="text-sm text-gray-500 mb-8">Project ID: {project.id}</p>

          <Link
            href="/projects"
            className="inline-flex items-center text-gray-700 bg-gray-200 border-0 py-2 px-6 rounded-full text-lg hover:bg-gray-300 transition"
          >
            Back to Projects
          </Link>
        </article>
      </div>
    </>
  );
}
