import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';


// TypeScript interfaces for the GLTF model
interface GLTFResult {
  nodes: {
    defaultMaterial: Mesh;
    defaultMaterial_1: Mesh;
    defaultMaterial_2: Mesh;
    defaultMaterial_3: Mesh;
    defaultMaterial_4: Mesh;
    defaultMaterial_5: Mesh;
  };
  materials: {
    Material_1001: THREE.Material;
    ZenUV_Generic_Material_001_1001: THREE.Material;
    ZenUV_Generic_Material_002_1001: THREE.Material;
    ZenUV_Generic_Material_003_1001: THREE.Material;
    ZenUV_Generic_Material_004_1001: THREE.Material;
    ZenUV_Generic_Material_005_1001: THREE.Material;
  };
}

interface ModelProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

// The Model component using the GLTF hook
export default function HeroElement(props: ModelProps) {
  // Use the useGLTF hook from @react-three/drei
  const { nodes, materials } = useGLTF('/models/future_pc.glb');

  return (
    <group  {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
            castShadow
            receiveShadow
            geometry={(nodes.defaultMaterial as THREE.Mesh).geometry} 
            material={materials.Material_1001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.defaultMaterial_1 as THREE.Mesh).geometry} 
            material={materials.ZenUV_Generic_Material_001_1001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.defaultMaterial_2 as THREE.Mesh).geometry} 
            material={materials.ZenUV_Generic_Material_002_1001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.defaultMaterial_3 as THREE.Mesh).geometry} 
            material={materials.ZenUV_Generic_Material_003_1001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.defaultMaterial_4 as THREE.Mesh).geometry} 
            material={materials.ZenUV_Generic_Material_004_1001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.defaultMaterial_5 as THREE.Mesh).geometry} 
            material={materials.ZenUV_Generic_Material_005_1001}
          />
        </group>
      </group>
    </group>
  );
}


useGLTF.preload('/models/future_pc.glb');
