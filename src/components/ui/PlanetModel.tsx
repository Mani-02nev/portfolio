
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Planet = ({ orbitRadius, speed, color, size }: { orbitRadius: number; speed: number; color: string; size: number }) => {
    const meshRef = useRef<THREE.Group>(null);

    // Create orbit line points
    const orbitPoints = useMemo(() => {
        const points = [];
        for (let i = 0; i <= 64; i++) {
            const angle = (i / 64) * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(angle) * orbitRadius, 0, Math.sin(angle) * orbitRadius));
        }
        return points;
    }, [orbitRadius]);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime() * speed;
            meshRef.current.position.x = Math.cos(t) * orbitRadius;
            meshRef.current.position.z = Math.sin(t) * orbitRadius;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group>
            {/* Orbit Path */}
            <Line
                points={orbitPoints}
                color={color}
                opacity={0.1}
                transparent
                lineWidth={1}
            />

            {/* Planet */}
            <group ref={meshRef}>
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh>
                        <sphereGeometry args={[size, 16, 16]} />
                        <meshBasicMaterial color={color} wireframe opacity={0.3} transparent />
                    </mesh>
                    {/* Inner core */}
                    <mesh>
                        <sphereGeometry args={[size * 0.4, 8, 8]} />
                        <meshBasicMaterial color={color} opacity={0.5} transparent />
                    </mesh>
                </Float>
            </group>
        </group>
    );
};

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            {/* Center Sun/Core */}
            <Float speed={3} rotationIntensity={2} floatIntensity={2}>
                <mesh>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <MeshDistortMaterial
                        color="#10b981"
                        speed={2}
                        distort={0.4}
                        radius={0.8}
                        wireframe
                    />
                </mesh>
            </Float>

            {/* Planets */}
            <Planet orbitRadius={3} speed={0.4} color="#3b82f6" size={0.3} />
            <Planet orbitRadius={5} speed={0.25} color="#8b5cf6" size={0.4} />
            <Planet orbitRadius={7} speed={0.15} color="#10b981" size={0.2} />
            <Planet orbitRadius={9} speed={0.1} color="#f59e0b" size={0.5} />
        </>
    );
};

export const PlanetModel = () => {
    return (
        <div className="fixed inset-0 -z-30 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 8, 15], fov: 45 }}>
                <Scene />
            </Canvas>
        </div>
    );
};
