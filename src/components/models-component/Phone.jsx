import { Html, useGLTF } from '@react-three/drei'
export default function Phone(props) {
    const { scene } = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
    )
    return (
        <primitive object={scene} {...props}>
            <Html
                transform
                scale={1.89}
                wrapperClass="htmlPhoneScreen"
                distanceFactor={1.17}
                position={[0.24, 1.13, -2.1]}
            >
                <iframe src="/html" />
            </Html>
        </primitive>
    )
}
