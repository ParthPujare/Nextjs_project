export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 py-8">
            <div className="flex flex-col items-center text-center mb-8">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-2">Contact Me</h1>
                <p className="text-lg sm:text-xl text-gray-700">Feel free to reach out!!!</p>
            </div>
            <form className="w-full max-w-3xl flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label className="font-bold text-lg sm:text-xl mb-1">Name</label>
                        <input type="text" className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"/>
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label className="font-bold text-lg sm:text-xl mb-1">Email</label>
                        <input type="email" className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"/>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-bold text-lg sm:text-xl mb-1">Message</label>
                    <textarea className="border border-gray-400 rounded-lg p-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="font-bold text-lg sm:text-2xl bg-gray-200 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">Submit</button>
                </div>
            </form>
        </div>
    </>
  );
}
