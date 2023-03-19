import { Environment, Stars } from '@react-three/drei'

export const Background = () => {
  return (
    <>
      <Environment preset='night' />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
      <Stars radius={40} depth={60} count={5000} factor={4} saturation={0} fade speed={0.5} />
      <Stars radius={30} depth={20} count={5000} factor={4} saturation={0} fade speed={0.5} />
      <color args={['#090D17']} attach='background' />
    </>
  )
}
