import ActivityCard from "../../components/ActivityCard";

export default function Home(){
    return(
        <>
            <div className="w-full px-4 py-6">
                <div className="flex flex-col items-center text-center mb-8">
                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-mono text-gray-900 mb-2">My Activities</h1>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl">Some of the activities I have been a part of!!!</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    <ActivityCard
                    title="ClockOut2.0"
                    description="As a member of the events department for the SIGAI committee, I had the privilege of helping bring this unique and dynamic event to life."
                    id="1"
                    imgsrc="clockout.jpeg"
                    />
                    <ActivityCard
                    title="Beach CleanUP"
                    description="Took some time away from the usual grind to give back to the environment with a beach cleanup!"
                    id="2"
                    imgsrc="beach.jpeg"
                    />
                    <ActivityCard
                    title="German Study Seminar"
                    description="Had the wonderful opportunity to attend Ziel: Germany, a seminar aimed at connecting Indian students with the German education system and encouraging higher studies in Germany."
                    id="3"
                    imgsrc="german.jpeg"
                    />
                </div>
            </div>
        </>
    )
}