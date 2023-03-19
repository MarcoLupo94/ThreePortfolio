import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'
import { Line, useCursor } from '@react-three/drei'
import { LaptopSection } from '@/components/molecules/LaptopSection'
import { PhoneSection } from '@/components/molecules/PhoneSection'

import { useThree } from '@react-three/fiber'

export default function MainScene({ route, ...props }) {
  const router = useRouter()
  const mesh = useRef(null)
  const [hovered, hover] = useState(false)
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  const { viewport } = useThree()
  const isPhoneScreen = useMemo(() => viewport.width < 4.8, [viewport])
  // useCursor(hovered)
  // useFrame((state, delta) => {
  //   const t = state.clock.getElapsedTime()
  //   mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
  //   mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
  //   mesh.current.rotation.z -= delta / 4
  // })

  return (
    <group ref={mesh} {...props}>
      {!isPhoneScreen ? <LaptopSection viewport={viewport} isPhoneScreen={isPhoneScreen} /> : <PhoneSection />}
    </group>
  )
}
