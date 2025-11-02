import Image from "next/image";


export default function Movefaster() {
    return (
        <div>
            <div className="relative mt-43 flex flex-col items-center w-full min-h-screen  bg-black overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <Image
                        src="/ready1.webp"
                        alt="Background"
                        height={400}
                        width={1500}
                        style={{ opacity: 0.6 }}
                        priority
                        className="lg:mt-92 md:mt-95 mt-20"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

                </div>

                <div className="max-w-7xl mx-auto px-10 relative z-10 mt-22 backdrop-blur-xl bg-white/7   rounded-4xl lg:py-24 md:py-14 py-10  ">
                    {/* Title + Description */}
                    <div className="grid md:grid-cols-1 items-center gap-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                                Built to Move You  Forward and Beyond
                            </h2>
                            <p className="text-gray-400 mt-4 max-w-md">
                                Experience clear outcomes with tools designed to streamline your
                                process and accelerate results.
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-10 mt-20">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-green-700 p-2 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="white"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Real-Time Collaboration</p>
                                <p className="text-gray-400 text-sm">
                                    Work together seamlessly without delays. Keep everyone aligned
                                    with shared progress.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-green-700 p-2 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="white"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Built-in AI to Help You</p>
                                <p className="text-gray-400 text-sm">
                                    Automate repetitive work and let AI handle the details so you
                                    can focus on what truly matters.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-green-700 p-2 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="white"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Customizable Tools</p>
                                <p className="text-gray-400 text-sm">
                                    Easily adapt every workflow, field, and view to match your
                                    team's unique process.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-green-700 p-2 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="white"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Data-Driven Suggestions</p>
                                <p className="text-gray-400 text-sm">
                                    Get intelligent recommendations based on your team's activity,
                                    so you can move faster.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>







            </div>




        </div>
    );
}
