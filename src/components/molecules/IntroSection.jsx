import { Float } from '@react-three/drei'
import TextSphere from '../models-component/TextSphere'
export const IntroSection = ({ isPhoneScreen, viewport }) => {
  return (
    <group position={[2, -2, 0]}>
      <Float rotationIntensity={0.4} floatIntensity={0.4}>
        <TextSphere />
      </Float>
    </group>
  )
}
