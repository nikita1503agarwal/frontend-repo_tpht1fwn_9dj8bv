function Features() {
  const items = [
    {
      title: 'Head Tracking',
      desc: 'The robot subtly follows your cursor, creating a playful and immersive feel.',
    },
    {
      title: 'Crisp Aesthetic',
      desc: 'Black robot set against a clean white/grey canvas for striking contrast.',
    },
    {
      title: 'Lightweight',
      desc: 'Optimized 3D scene renders smoothly across modern devices and browsers.',
    },
  ]

  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
