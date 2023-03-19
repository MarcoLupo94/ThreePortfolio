import { ContactShadows, Float, Html, PresentationControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useMemo, useState } from 'react'
import Phone from '../models-component/Phone'
import { zoomOffLaptop, zoomOnLaptop } from '../animations/cameraAnimation'
export const PhoneSection = () => {
  const { viewport, camera } = useThree()
  const isPhoneScreen = useMemo(() => viewport.width < 4.8, [viewport])
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
      <Phone position-x={0} position-y={-1.2} rotation={[-0.2, -0.6, -0.03]} />

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}
