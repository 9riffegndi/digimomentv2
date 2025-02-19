
import Benefits from './components/ui/Benefits'
import Hero from './components/ui/Hero'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

function App() {

  return (
    <main className='flex flex-col min-h-screen items-center justify-between'>
    <Navbar/>
    <Hero />
    <Benefits/>
    <Footer/>
    </main>
  )
}

export default App
