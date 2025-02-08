'use client'
import { Canvas, Vector3 } from '@react-three/fiber'
import GlassBox from './GlassBox'
import SVGShape from './Svg'
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const HeroScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [cameraPosition, setCameraPosition] = useState<Vector3>([0, 2, 2])
  const isInView = useInView(sceneRef);

  useEffect(() => {
    if(window.innerWidth > 640) {
      setCameraPosition([0, 2, 2])
    }
  }, [])

  return (
    <div ref={sceneRef} className='h-[300px] w-full overflow-hidden -mt-6 lg:row-span-2 lg:h-[400px] xl:h-[450px]'>
      <Canvas camera={{ position: cameraPosition }}>

        <pointLight position={[2, 0, 2]} intensity={120} color="#ff0066" /> {/* Pink */}
        <pointLight position={[-2, 0, 2]} intensity={50} color="#00ffff" /> {/* Cyan */}
        <pointLight position={[-2, 2, 2]} intensity={20} color="#4400ff" /> {/* Blue */}
        <pointLight position={[2, -2, 2]} intensity={20} color="#ffaa00" /> {/* Orange */}

        <GlassBox isInView={isInView} />
        <SVGShape 
          url='/images/hero/cursor.svg' 
          rotation={[Math.PI/1.8, 0, 0]} 
          position={[-0.6, 0.5, -0.4]} 
        />
      </Canvas>
    </div>
  )
}

export default HeroScene 