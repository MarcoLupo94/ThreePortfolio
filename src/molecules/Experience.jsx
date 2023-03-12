import { ContactShadows, Environment, Float, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Laptop from '../models-component/Laptop'
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
            <Environment preset="city" />
            <color args={['#695b5b']} attach="background" />
            <PresentationControls
                rotation={[0.13, 0.1, 0]}
                azimuth={[-1, 0.75]}
                polar={[-0.4, 0.2]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <Float rotationIntensity={0.4}>
                    <Laptop position-y={-1.2} />
                </Float>
            </PresentationControls>
            <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        </Canvas>
    )
}
