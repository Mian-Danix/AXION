
const Hero = () => {
    return (
        <section className=" min-h-[115vh]  overflow-x-hidden">
            <div className="h-[90vh] w-screen pt-[7vh] px-[4vw] flex justify-between ">
                <h1 className="font-semibold text-8xl text-black   tracking-wide w-[55vw]">Let's Move your  Business Forward</h1>
                <div className="w-[25vw] pt-[3vh]  ">
                    <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis, odit id est quis delectus assumenda, unde </p>
                    <button className="px-4 py-1 text-lg rounded-full border bg-black text-white mt-8  hover:bg-white hover:text-black">Learn More</button>
                </div>
            </div>
            <img src="/hero1.png" alt="" className="h-[100vh ] absolute -z-10 w-full  top-80 " />

        </section>
    )
}

export default Hero