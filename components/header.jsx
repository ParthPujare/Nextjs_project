import Link from "next/link"

export default function Header(){
    return(
        <>
            <header className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-4 bg-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 text-center md:text-left">
                    <Link className="text-2xl sm:text-3xl font-bold text-gray-900" href="/">Parth Pujare</Link>
                    <p className="text-gray-700 text-sm sm:text-lg md:text-xl">AI & ML Student </p>
                </div>
                <nav className="flex flex-wrap justify-center md:justify-end items-center gap-3 mt-3 md:mt-0 text-gray-700 font-semibold">
                    <Link className="hover:text-black transition" href="/activities">Activities</Link>
                    <span className="hidden md:inline border-l h-5 border-gray-400"></span>

                    <Link className="hover:text-black transition" href="/projects">Projects</Link>
                    <span className="hidden md:inline border-l h-5 border-gray-400"></span>

                    <Link className="hover:text-black transition" href="/contact">Contact</Link>
                </nav>
            </header>
        </>
    )
}