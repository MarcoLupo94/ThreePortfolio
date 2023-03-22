import { LaptopSection } from '@/components/molecules/LaptopSection'
import { PhoneSection } from '@/components/molecules/PhoneSection'
import { useContext, useMemo, useRef } from 'react'

import { ScrollContext } from '@/templates/hooks/context'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { IntroSection } from '../molecules/IntroSection'

const color = new THREE.Color()
export default function MainScene({ route, ...props }) {
  const mesh = useRef(null)
  const { viewport } = useThree()
  const isPhoneScreen = useMemo(() => viewport.width < 4.8, [viewport])
  const { scroll } = useContext(ScrollContext)
  const group = useRef()
  const { camera } = useThree()
  // const { nodes, materials, animations } = useGLTF('/model.glb')
  // const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState()
  const extras = { receiveShadow: true, castShadow: true, 'material-envMapIntensity': 0.2 }
  // useEffect(() => void (actions['CameraAction.005'].play().paused = true), [])
  useEffect(() => {
    if (hovered) group.current.getObjectByName(hovered).material.color.set('white')
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  useFrame((state) => {
    // actions['CameraAction.005'].time = THREE.MathUtils.lerp(
    //   actions['CameraAction.005'].time,
    //   actions['CameraAction.005'].getClip().duration * scroll.current,
    //   0.05,
    // )
    camera.position.y = scroll.current * -5
    // group.current.children[0].children.forEach((child, index) => {
    // child.material.color.lerp(color.set(hovered === child.name ? 'tomato' : '#202020'), hovered ? 0.1 : 0.05)
    // const et = state.clock.elapsedTime
    // child.position.y = Math.sin((et + index * 2000) / 2) * 1
    // child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
    // child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
    // child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
    // })
  })
  return (
    <group ref={(mesh, group)} {...props}>
      {/* <IntroSection /> */}
      {/* {!isPhoneScreen ? <LaptopSection viewport={viewport} isPhoneScreen={isPhoneScreen} /> : <PhoneSection />} */}
    </group>
  )
}
