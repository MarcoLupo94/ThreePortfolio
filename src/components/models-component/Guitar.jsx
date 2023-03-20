import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Guitar(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/guitar/model.gltf',
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.parlourGuitar.geometry} material={materials['Parlor-Guitar.MAT']}>
        <mesh geometry={nodes.parlourGuitarstringe.geometry} material={nodes.parlourGuitarstringe.material} />
        <mesh geometry={nodes.parlourGuitarstringG.geometry} material={nodes.parlourGuitarstringG.material} />
        <mesh geometry={nodes.parlourGuitarstringA.geometry} material={nodes.parlourGuitarstringA.material} />
        <mesh geometry={nodes.parlourGuitarstringE.geometry} material={nodes.parlourGuitarstringE.material} />
        <mesh geometry={nodes.parlourGuitarstringB.geometry} material={nodes.parlourGuitarstringB.material} />
        <mesh geometry={nodes.parlourGuitarstringD.geometry} material={nodes.parlourGuitarstringD.material} />
      </mesh>
    </group>
  )
}

useGLTF.preload('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/guitar/model.gltf')
