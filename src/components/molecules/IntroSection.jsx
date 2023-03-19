import { ContactShadows, Float, Html, PresentationControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useState } from 'react'
import { zoomOffLaptop, zoomOnLaptop } from '../animations/cameraAnimation'
import { DelayLink } from '../atoms/DelayLink'
import Laptop from '../models-component/Laptop'
export const IntroSection = ({ isPhoneScreen, viewport }) => {
  const { camera } = useThree()
  const [zoomedIn, setZoomedIn] = useState(false)

  const zoomIn = (event) => {
    event.preventDefault()
    if (!zoomedIn) {
      zoomOnLaptop(camera, isPhoneScreen)
      setZoomedIn(true)
    } else {
      zoomOffLaptop(camera, isPhoneScreen)
      setZoomedIn(false)
    }
  }

  return (
    <>
      <Float rotationIntensity={zoomedIn ? 0 : 0.4} floatIntensity={zoomedIn ? 0 : 0.4}>
        <Html transform distanceFactor={1.17} position={[0, 0, 0]}>
          <h1>WElcome</h1>
        </Html>
      </Float>

      <ContactShadows position-y={0} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}
