import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 via-zinc-100 to-white dark:from-slate-950 dark:via-slate-950 dark:to-black">
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
