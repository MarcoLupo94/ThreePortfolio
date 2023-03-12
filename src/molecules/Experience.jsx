import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
export default function Experience() {
    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,

                position: [-3, 1.5, 4]
            }}
        >
            <OrbitControls makeDefault />

            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    )
}
