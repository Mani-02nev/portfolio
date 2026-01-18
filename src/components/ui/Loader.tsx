import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                    <div
                        className="h-full bg-gradient-to-r from-lavender to-fuchsia transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-lavender font-display font-medium tracking-widest uppercase text-xs animate-pulse">
                    Initializing Cosmic Systems {progress.toFixed(0)}%
                </p>
            </div>
        </Html>
    );
};

export default Loader;
