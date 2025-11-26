"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01 * speed;
            meshRef.current.rotation.y += 0.015 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <FloatingShape position={[-4, 2, 0]} color="#3b82f6" speed={1} />
                <FloatingShape position={[4, -2, -2]} color="#8b5cf6" speed={0.8} />
                <FloatingShape position={[-2, -3, 2]} color="#06b6d4" speed={1.2} />
                <FloatingShape position={[3, 3, 1]} color="#ec4899" speed={0.9} />
            </Canvas>
        </div>
    );
}
