import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';

function CoreSphere() {
  const mesh = useRef();
  const wire = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * 0.18;
    mesh.current.rotation.z = t * 0.06;
    wire.current.rotation.y = -t * 0.12;
    wire.current.rotation.x = t * 0.08;
  });

  return (
    <group position={[1.6, 0.1, 0]} scale={1.05}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.55, 48]} />
        <MeshDistortMaterial
          color="#2f66ff"
          emissive="#0c1c5c"
          emissiveIntensity={0.55}
          metalness={0.75}
          roughness={0.18}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
      <mesh ref={wire} scale={1.28}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#5c8bff" wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function Orbiter({ radius, speed, size, color, tilt, offset }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.rotation.x = t;
    ref.current.rotation.y = t * 1.4;
  });

  return (
    <group rotation={[tilt, 0.35, 0]}>
      <mesh ref={ref}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.25} emissive={color} emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
}

function Ring() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = t * 0.22;
    ref.current.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.3) * 0.14;
  });
  return (
    <mesh ref={ref} position={[1.6, 0.1, 0]} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[2.55, 0.012, 12, 128]} />
      <meshBasicMaterial color="#7db4ff" transparent opacity={0.5} />
    </mesh>
  );
}

function ParallaxRig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    group.current.rotation.y = group.current.rotation.y + (x * 0.22 - group.current.rotation.y) * delta * 2.4;
    group.current.rotation.x = group.current.rotation.x + (-y * 0.14 - group.current.rotation.x) * delta * 2.4;
  });
  return <group ref={group}>{children}</group>;
}

export default function Scene3D() {
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 6.5], fov: 46 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 4]} intensity={40} color="#2f66ff" />
      <pointLight position={[-5, -3, 3]} intensity={26} color="#7db4ff" />
      <spotLight position={[0, 6, 2]} angle={0.5} penumbra={1} intensity={30} color="#ffffff" />

      <ParallaxRig>
        <CoreSphere />
        <Ring />
        <Orbiter radius={2.55} speed={0.5} size={0.16} color="#5c8bff" tilt={0.5} offset={0} />
        <Orbiter radius={2.55} speed={0.5} size={0.12} color="#d4ff00" tilt={0.5} offset={Math.PI} />
        <Orbiter radius={3.1} speed={-0.32} size={0.2} color="#7db4ff" tilt={-0.35} offset={1.4} />

        <Float speed={2.4} rotationIntensity={1.6} floatIntensity={2.2}>
          <mesh position={[-3.4, 1.6, -1]}>
            <torusKnotGeometry args={[0.34, 0.11, 110, 14]} />
            <meshStandardMaterial color="#d4ff00" metalness={0.8} roughness={0.25} emissive="#d4ff00" emissiveIntensity={0.25} />
          </mesh>
        </Float>

        <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.6}>
          <mesh position={[-2.6, -1.9, -0.5]}>
            <dodecahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color="#5c8bff" metalness={0.8} roughness={0.3} emissive="#5c8bff" emissiveIntensity={0.3} />
          </mesh>
        </Float>

        <Float speed={2} rotationIntensity={1.4} floatIntensity={2}>
          <mesh position={[4.2, -1.7, -1.4]}>
            <icosahedronGeometry args={[0.26, 0]} />
            <meshStandardMaterial color="#7db4ff" metalness={0.85} roughness={0.2} emissive="#7db4ff" emissiveIntensity={0.35} />
          </mesh>
        </Float>

        <Sparkles count={170} scale={[14, 8, 8]} size={2.2} speed={0.32} color="#b9ccff" opacity={0.7} />
      </ParallaxRig>
    </Canvas>
  );
}
