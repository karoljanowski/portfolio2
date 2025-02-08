'use client'
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const GlassBox = ({ isInView }: { isInView: boolean }) => {
    const boxRef = useRef<THREE.Mesh>(null!);
    
    const material = useMemo(() => new THREE.MeshPhysicalMaterial({
        transparent: true,
        opacity: 0.6,
        color: new THREE.Color(0.8, 0.95, 1),
        thickness: 0.8,
        roughness: 0,
        metalness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transmission: 0.4,
        ior: 10,
        attenuationColor: new THREE.Color(0.5, 0.8, 1),
        attenuationDistance: 0.5,
        iridescence: 1,
        iridescenceIOR: 1.3,
        iridescenceThicknessRange: [100, 700],
        envMapIntensity: 1.5,
    }), []);

    useFrame((_, delta) => {
        if (boxRef.current && isInView) {
            boxRef.current.rotation.y += delta * 0.3;
            boxRef.current.rotation.x += delta * 0.3;
        }
    })

    return (
        <mesh ref={boxRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
            <RoundedBox args={[2, 2, 2]} radius={0.3}>
                <primitive object={material} />
            </RoundedBox>
        </mesh>
    )
}

export default GlassBox