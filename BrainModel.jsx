import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/brain.gltf')
  const ref = useRef();
  let time = 0;

  useFrame((state) => {
    // If the user is not interacting, apply the wavy rotation
      ref.current.rotation.y += 0.01;
    // Update time based on frame rate
    time = state.clock.getElapsedTime();

    // Apply wavy rotation around the vertical axis (Y-axis) using a sine wave
    ref.current.position.y = 0.3*Math.sin(time);
    ref.current.scale.set(props.scale, props.scale, props.scale);
    ref.current.position.x = props.position[0];
    ref.current.position.y = props.position[1];
    ref.current.position.z = props.position[2];
  });
  materials.Colour_Brain_Texture.transparent = true;
  materials.Colour_Brain_Texture.opacity = 0.5;
  return (
    <group ref={ref} dispose={null} >
      <mesh geometry={nodes.Brain_Part_01_Colour_Brain_Texture_0.geometry} material={materials.Colour_Brain_Texture} />
      <mesh geometry={nodes.Brain_Part_02_Colour_Brain_Texture_0.geometry} material={materials.Colour_Brain_Texture} />
      <mesh geometry={nodes.Brain_Part_03_Colour_Brain_Texture_0.geometry} material={materials.Colour_Brain_Texture} />
      <mesh geometry={nodes.Brain_Part_04_Colour_Brain_Texture_0.geometry} material={materials.Colour_Brain_Texture} />
      <mesh geometry={nodes.Brain_Part_05_Colour_Brain_Texture_0.geometry} material={materials.Colour_Brain_Texture} />
      <mesh geometry={nodes.Brain_Part_06_Colour_Brain_Texture_0.geometry} material={materials.Colour_Brain_Texture} />
    </group>
  )
}

useGLTF.preload('brain.gltf')
