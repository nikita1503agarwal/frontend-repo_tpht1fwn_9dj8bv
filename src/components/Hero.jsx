import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-zinc-50 via-zinc-100 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[42rem] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-fuchsia-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-28 lg:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Interactive 3D Robot
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm sm:text-6xl dark:text-white">
          Playful Robotics, Powered by the Web
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          Explore a modern, interactive robot whose head follows your cursor. Built with a real-time 3D scene for a
          futuristic, tactile feel.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:translate-y-[-1px] hover:bg-slate-800 active:translate-y-0 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            See what it can do
          </a>
          <a
            href="#try"
            className="inline-flex items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Move your mouse around
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
