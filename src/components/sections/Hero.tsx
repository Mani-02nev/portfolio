import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../ui/HeroText";
import ParallaxBackground from "../ui/ParallaxBackground";
import { Astronaut } from "../ui/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../ui/Loader";
import { Particles } from "../ui/Particles";

export const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });

    return (
        <section id="home" className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
            <Particles
                className="absolute inset-0 z-0"
                quantity={150}
                staticity={30}
                color="#c77dff"
            />
            <HeroText />
            <div className="absolute inset-0 -z-20">
                <ParallaxBackground />
            </div>
            <figure
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ width: "100vw", height: "100vh" }}
            >
                <Canvas camera={{ position: [0, 1, 3] }}>
                    {/* Consistent Lighting for full visibility */}
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2.5} />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                    <Suspense fallback={<Loader />}>
                        <Float>
                            <Astronaut
                                scale={isMobile ? 0.23 : 0.3}
                                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
                            />
                        </Float>
                        <Rig />
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    );
};

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5,
            delta
        );
    });
}
