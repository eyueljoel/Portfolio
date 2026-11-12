export default function Aurora({ static: isStatic = false }) {
  const motion = isStatic ? '' : 'animate-aurora'

  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className={`absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-indigo-600/25 blur-[120px] ${motion}`} />
      <div className={`absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-[120px] ${motion} ${isStatic ? '' : '[animation-delay:-6s]'}`} />
      <div className={`absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/20 blur-[120px] ${motion} ${isStatic ? '' : '[animation-delay:-12s]'}`} />
      {/* Grid fade overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.15]
        [background-image:linear-gradient(to_right,#818cf8_1px,transparent_1px),linear-gradient(to_bottom,#818cf8_1px,transparent_1px)]
        [background-size:56px_56px]
        [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
    </div>
  )
}
