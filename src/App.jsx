import { useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Benifits from './components/benifits'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <>
    <div className='flex flex-col min-h-screen
         bg-[linear-gradient(45deg,#616083,#0C0E1D,#0C0E1D,#616083)]
         bg-[length:300%_300%]
         animate-gradient-shift'>
      <Header/>
      <Hero />
      <Benifits />
          <Footer />
    </div>

    </>
  )
}

export default App
