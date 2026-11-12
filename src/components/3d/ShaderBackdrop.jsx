import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.999, 1.0); // full-screen quad in clip space
  }
`

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1,0)), u.x),
               mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 m = uMouse * 0.5 + 0.5;
    float d = distance(uv, m);

    vec2 q = uv * 3.0 + vec2(uTime * 0.05, -uTime * 0.03);
    float n = fbm(q + fbm(q + uTime * 0.08));

    vec3 c1 = vec3(0.39, 0.40, 0.95);  // indigo
    vec3 c2 = vec3(0.75, 0.52, 0.99);  // violet
    vec3 c3 = vec3(0.13, 0.83, 0.93);  // cyan
    vec3 col = mix(c1, c2, n);
    col = mix(col, c3, smoothstep(0.55, 0.95, n));

    float glow = smoothstep(0.45, 0.0, d);          // cursor spotlight
    float vignette = smoothstep(1.1, 0.2, distance(uv, vec2(0.5)));
    float alpha = (n * 0.28 + glow * 0.22) * vignette;

    gl_FragColor = vec4(col * 0.9, alpha);
  }
`

export default function ShaderBackdrop() {
  const mat = useRef()
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  )

  useFrame(({ clock, pointer }) => {
    if (mat.current) {
      mat.current.uniforms.uTime.value = clock.elapsedTime
      mat.current.uniforms.uMouse.value.lerp(pointer, 0.05)
    }
  })

  return (
    <mesh frustumCulled={false} renderOrder={-1}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

