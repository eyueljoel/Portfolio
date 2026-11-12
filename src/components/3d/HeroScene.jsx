import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Points, PointMaterial, Html } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import * as THREE from 'three'

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768

/* ---------- Particle field ---------- */
function Particles({ count, color }) {
  const group = useRef()
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 7
      const t = Math.random() * Math.PI * 2
      const p = Math.acos(2 * Math.random() - 1)
      a[i * 3] = r * Math.sin(p) * Math.cos(t)
      a[i * 3 + 1] = r * Math.sin(p) * Math.sin(t)
      a[i * 3 + 2] = r * Math.cos(p)
    }
    return a
  }, [count])

  useFrame((_, dt) => {
    if (group.current) {
      group.current.rotation.y += dt * 0.03
      group.current.rotation.x += dt * 0.01
    }
  })

  return (
    <group ref={group}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={color} size={0.035} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

/* ---------- Orbiting labels ---------- */
function Orbit({ labels, color, radius = 3.2 }) {
  const ring = useRef()
  useFrame((_, dt) => {
    if (ring.current) {
      ring.current.rotation.y += dt * 0.25
    }
  })

  return (
    <group ref={ring} rotation={[0.35, 0, 0.15]}>
      {labels.map((label, i) => {
        const a = (i / labels.length) * Math.PI * 2
        return (
          <group key={label} position={[Math.cos(a) * radius, 0, Math.sin(a) * radius]}>
            <mesh>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
            <Html center distanceFactor={9} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
              <span className="glass whitespace-nowrap rounded-full px-3 py-1 font-mono text-xs text-slate-100 shadow-md">
                {label}
              </span>
            </Html>
          </group>
        )
      })}
    </group>
  )
}

/* ---------- Core + rig (mouse parallax + scroll) ---------- */
function Core({ colors, pointer }) {
  const rig = useRef()

  useFrame((state) => {
    if (!rig.current) return
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, pointer.current.x * 0.6, 0.06)
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, -pointer.current.y * 0.4, 0.06)
  })

  return (
    <group ref={rig}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.35, 24]} />
          <MeshDistortMaterial
            color={colors.core}
            emissive={colors.coreEmissive}
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.8}
            distort={0.45}
            speed={2.2}
          />
        </mesh>
        <mesh scale={1.55}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={colors.shell} wireframe transparent opacity={0.25} />
        </mesh>
      </Float>
    </group>
  )
}

/* ---------- Canvas ---------- */
export default function HeroScene({ labels, colors }) {
  const { ref, inView } = useInView({ threshold: 0 })
  const mobile = isMobile()
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updatePointer = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = 1 - (event.clientY / window.innerHeight) * 2
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    return () => window.removeEventListener('pointermove', updatePointer)
  }, [])

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        dpr={mobile ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[6, 6, 6]} intensity={60} color={colors.keyLight} />
        <pointLight position={[-6, -4, 4]} intensity={40} color={colors.fillLight} />
        <Core colors={colors} pointer={pointer} />
        <Orbit labels={labels} color={colors.orbit} />
        <Particles count={mobile ? 600 : 2200} color={colors.particles} />
      </Canvas>
    </div>
  )
}
