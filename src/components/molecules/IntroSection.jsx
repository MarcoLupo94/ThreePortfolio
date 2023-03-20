import { Float, PresentationControls } from '@react-three/drei'
import Guitar from '../models-component/Guitar'
export const IntroSection = ({ isPhoneScreen, viewport }) => {
  return (
    <group position={[0, -0.5, 1.63]} rotation={[-0.5, -1.5, -0.3]}>
      <PresentationControls
        makeDefault
        azimuth={[-1, 0.75]}
        polar={[-0.4, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}>
        <Float rotationIntensity={0.4} floatIntensity={0.4}>
          <Guitar scale={2.5} />
        </Float>
      </PresentationControls>
    </group>
  )
}
