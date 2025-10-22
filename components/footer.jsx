export default function Footer(){
    return(
        <>
            <footer className="bg-gray-100 w-full">
                <div className="border-t border-gray-400 w-full mt-4"></div>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-center md:text-left py-6 pt-4 gap-6 md:gap-0">
                    <div className="">
                        <p className="font-bold text-lg sm:text-xl">Email</p>
                        <p className="text-gray-700 text-sm sm:text-base mt-1">parthvpujare@gmail.com</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-lg sm:text-xl">Linked In</p>
                        <a href="https://www.linkedin.com/in/parth-pujare-67a14a2bb/" className="text-gray-700 text-sm sm:text-base mt-1 hover:underline break-all">https://www.linkedin.com/in/parth-pujare</a>
                    </div>
                    <div className="">
                        <p className="font-bold text-lg sm:text-xl">GitHub</p>
                        <a href="https://github.com/ParthPujare" className="text-gray-700 text-sm sm:text-base mt-1 hover:underline break-all">https://github.com/ParthPujare</a>
                    </div>
                </div>
            </footer>
        </>
    )
}