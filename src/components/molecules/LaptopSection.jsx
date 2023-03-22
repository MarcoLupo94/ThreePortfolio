// import { ContactShadows, Float, Html, PresentationControls, Text } from '@react-three/drei'
// import { useThree } from '@react-three/fiber'
// import { useState } from 'react'
// import { zoomOffLaptop, zoomOnLaptop } from '../animations/cameraAnimation'
// import { DelayLink } from '../atoms/DelayLink'
// import Laptop from '../models-component/Laptop'
// export const LaptopSection = ({ isPhoneScreen, viewport }) => {
//   const { camera } = useThree()
//   const [zoomedIn, setZoomedIn] = useState(false)

//   const zoomIn = (event) => {
//     event.preventDefault()
//     if (!zoomedIn) {
//       zoomOnLaptop(camera, isPhoneScreen)
//       setZoomedIn(true)
//     } else {
//       zoomOffLaptop(camera, isPhoneScreen)
//       setZoomedIn(false)
//     }
//   }

//   return (
//     <group position-y={-1.8}>
//       <PresentationControls
//         makeDefault
//         rotation={[0.13, 0.1, 0]}
//         azimuth={[-1, 0.75]}
//         polar={[-0.4, 0.2]}
//         config={{ mass: 2, tension: 400 }}
//         snap={{ mass: 4, tension: 400 }}
//       >
//         <Float rotationIntensity={zoomedIn ? 0 : 0.4} floatIntensity={zoomedIn ? 0 : 0.4}>
//           <Laptop scale={1} position-x={0} position-y={-3} />
//           <Html position-x={1} position-y={-2.2} position-z={-1}>
//             <DelayLink delay={1000} text={'Zoom'} zoomIn={zoomIn} />
//           </Html>
//           <Text
//             font='./bangers-v20-latin-regular.woff'
//             maxWidth={2}
//             fontSize={0.7}
//             position={[2, -0.75, 0.75]}
//             rotation-y={-1.25}
//           >
//             MY PROJECTS
//           </Text>
//         </Float>
//       </PresentationControls>

//       <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
//     </group>
//   )
// }
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'
import { ContactShadows, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Model from '../models-component/Laptop'
export default function LaptopSection() {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false)
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })
  return (
    <Suspense fallback={null}>
      <group rotation={[0, Math.PI * 2, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
        <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
      </group>
    </Suspense>
  )
}
