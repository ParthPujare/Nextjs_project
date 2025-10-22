import Link from "next/link";
export default function ActivityCard({ title, description, id, imgsrc }) {
  return (
    <div className="flex flex-col justify-between border border-gray-300 bg-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 w-full max-w-xs sm:max-w-sm md:max-w-xs">
      <h1 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 text-center sm:text-left">{title}</h1>
      <div className="w-full max-w-sm sm:max-w-md h-48 sm:h-56 md:h-48 overflow-hidden rounded-xl mb-3">
        <img src={imgsrc} alt={`img ${id}`} className="w-full h-full object-cover"/>
      </div>
      <p className="text-gray-700 text-sm sm:text-base flex-grow text-center sm:text-left">{description}</p>
      <Link href={`/activities/${id}`} className="flex justify-center sm:justify-end pt-4 text-gray-800 font-semibold hover:underline">Learn More </Link>
    </div>
  );
}
