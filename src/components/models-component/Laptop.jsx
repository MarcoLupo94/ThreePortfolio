import { Html, useGLTF } from '@react-three/drei'
export default function Laptop(props) {
    const { scene } = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
    )
    return (
        <primitive object={scene} {...props}>
            <rectAreaLight
                width={2.5}
                height={1.65}
                intensity={20}
                color={'#228B22'}
                rotation={[-0.1, Math.PI, 0]}
                position={[0, 0.55, -1.15]}
            />
            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
            >
                <iframe src="/html" />
            </Html>
        </primitive>
    )
}
