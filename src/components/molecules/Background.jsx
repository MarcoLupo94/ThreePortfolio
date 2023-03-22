import { Environment } from '@react-three/drei'
import { useRef } from 'react'
import Particles from '../atoms/Particles'
import Effects from './Effects'
export const Background = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const mouse = useRef([0, 0])

  return (
    <>
      {/* <pointLight distance={100} intensity={4} color='white' />  */}
      <Environment preset='night' />
      <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />
      <color args={['#090D17']} attach='background' />
    </>
  )
}
