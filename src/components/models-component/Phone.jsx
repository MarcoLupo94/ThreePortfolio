import { Html, useGLTF } from '@react-three/drei'
export default function Phone(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf',
  )
  return (
    <primitive object={scene} {...props} position-y={-3.3}>
      <Html transform scale={1.9} wrapperClass='htmlPhoneScreen' distanceFactor={1.17} position={[0.24, 0.9, -2.1]}>
        <iframe src='/html' />
      </Html>
    </primitive>
  )
}
