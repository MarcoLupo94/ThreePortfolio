import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Background } from '../molecules/Background'
import { ScrollTicker } from '@/templates/Scroll'
export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
      {...props}>
      <Background />
      {children}
      <Preload all />
    </Canvas>
  )
}
