import { useFrame } from '@react-three/fiber';
import React, { useRef, ReactNode } from 'react';
import { easing } from 'maath';
import * as THREE from 'three'; 

interface HeroCameraProps {
  children: ReactNode;
  isMobile: boolean;
}

const HeroCamera: React.FC<HeroCameraProps> = ({ children, isMobile }) => {
  const groupRef = useRef<THREE.Group | null>(null);  // Ensure it can be null initially

  useFrame((state, delta) => {
    // Damp camera position to a fixed location, creating smooth movement
    easing.damp3(state.camera.position, [0, 0, 35], 0.25, delta); 

    // Apply mouse movement rotation when not on mobile
    if (!isMobile && groupRef.current) {
      const { pointer } = state;  // Directly destructure pointer
      easing.dampE(groupRef.current.rotation, [-pointer.y / 3, pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
