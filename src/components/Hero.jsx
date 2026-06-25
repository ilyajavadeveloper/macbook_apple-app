import { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);

    return (
        <section
            id="hero"
            className="flex min-h-screen w-full flex-col items-center overflow-hidden px-4 pb-12 pt-36 text-center sm:px-6 sm:pt-40 md:pt-44 lg:pt-48"
        >
            <div className="relative z-10 flex w-full flex-col items-center">
                <h1 className="mb-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    MacBook Pro
                </h1>

                <img
                    src="/title.png"
                    alt="MacBook Title"
                    className="h-auto w-full max-w-4xl object-contain"
                />
            </div>

            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                autoPlay
                muted
                playsInline
                className="my-6 h-auto w-[120%] max-w-none object-contain sm:w-full sm:max-w-5xl md:my-8 lg:max-w-6xl"
            />

            <button className="relative z-10 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 active:translate-y-0">
                Buy
            </button>

            <p className="relative z-10 mt-5 text-sm opacity-70 sm:text-base md:text-lg">
                From $1599 or $133/mo for 12 months
            </p>
        </section>
    );
};

export default Hero;