import Link from "next/link"

export default function Landing(){
    return(
        <>
                <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-10 space-y-8 lg:space-y-0 lg:space-x-10">
                    <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-120 rounded-full border border-gray-400 overflow-hidden" >
                        <img src="profile.jpg" alt="profile image" className="h-full w-full object-cover " />
                    </div>
                    <div className="text-center lg:text-left max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-mono mt-6 lg:mt-16">Parth Pujare</h1>
                        <h2 className="text-gray-900 text-2xl sm:text-3xl mt-2">A bit about me </h2>
                        <p className="text-gray-600 text-base sm:text-lg mt-3 px-2 lg:px-0">Im a 3rd year student at DJ Sanghvi College Of Engineering. Blending creativity and problem-solving to craft meaningful digital experiences. Driven by learning, inspired by challenges.</p>
                        <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-4">
                            <Link className="flex items-center justify-center bg-[#A84724] text-white px-6 py-2 rounded-full font-bold" href="/activities">Activities</Link>
                            <Link className="flex items-center justify-center bg-[#A12B4E] text-white px-6 py-2 rounded-full font-bold" href="/projects">Projects</Link>
                            <Link className="flex items-center justify-center bg-[#A38FA3] text-white px-6 py-2 rounded-full font-bold" href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
        </>
    )
}