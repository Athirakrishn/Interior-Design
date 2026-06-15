import React from 'react'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="bg-slate-50 font-sans antialiased text-neutral-800 min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App