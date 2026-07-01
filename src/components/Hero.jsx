import { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.playbackRate = 2;

        const handleLoadedMetadata = () => {
            video.playbackRate = 2;
        };

        video.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, []);

    return (
        <section
            id="hero"
            className="
                flex min-h-[100svh] w-full flex-col items-center
                overflow-x-clip overflow-y-visible
                px-4 pb-[max(3rem,env(safe-area-inset-bottom))]
                pt-28 text-center
                sm:px-6 sm:pt-36
                md:pt-40
                lg:pt-44
            "
        >
            {/* Title */}
            <div className="relative z-10 flex w-full shrink-0 flex-col items-center">
                <h1
                    className="
                        mb-2 text-4xl font-semibold tracking-tight
                        sm:mb-3 sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                    "
                >
                    MacBook Pro
                </h1>

                <img
                    src="/title.png"
                    alt="MacBook Pro title"
                    className="
                        mx-auto block h-auto
                        w-full max-w-[340px] object-contain
                        sm:max-w-xl
                        md:max-w-3xl
                        lg:max-w-4xl
                    "
                />
            </div>

            {/* MacBook video */}
            <div
                className="
                    relative my-4 flex w-full
                    shrink-0 items-center justify-center
                    sm:my-6
                    md:my-8
                "
            >
                <video
                    ref={videoRef}
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="
                        relative left-1/2 block h-auto
                        w-[150vw] max-w-none
                        -translate-x-1/2 object-contain
                        sm:left-auto sm:w-full sm:max-w-5xl sm:translate-x-0
                        lg:max-w-6xl
                    "
                />
            </div>

            {/* CTA */}
            <div className="relative z-20 flex shrink-0 flex-col items-center">
                <button
                    type="button"
                    className="
                        min-h-12 rounded-full bg-blue-600
                        px-7 py-3 text-base font-semibold text-white
                        shadow-lg shadow-blue-600/20
                        transition duration-300
                        hover:-translate-y-0.5 hover:bg-blue-500
                        active:translate-y-0
                    "
                >
                    Buy
                </button>

                <p
                    className="
                        mt-4 text-sm opacity-70
                        sm:mt-5 sm:text-base
                        md:text-lg
                    "
                >
                    From $1599 or $133/mo for 12 months
                </p>
            </div>
        </section>
    );
};

export default Hero;