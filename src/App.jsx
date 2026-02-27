import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import BGPattern from './components/ui/BgPattern'

function App() {
  return (
    // relative ve min-h-screen ile kapsayıcıyı ayarlıyoruz
    <div className="bg-neutral-950 text-neutral-50 font-mono relative min-h-screen">
      
      {/* Harika grid arka planımız burada! Kenarlardan silikleşecek. */}
      <BGPattern variant="grid" mask="fade-bottom" />

      {/* Sitenin geri kalanı relative z-10 ile desenin üzerinde okunabilir duracak */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-6xl mx-auto px-6">
          <Hero /> 
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>

    </div>
  )
}

export default App