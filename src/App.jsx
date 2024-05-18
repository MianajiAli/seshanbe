import React from 'react'
import Header from './components/Header/Header'
import Counters from './components/Counters/Counters'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col justify-between'>
      <Header />
      <Counters />
      <Footer />
    </div>
  )
}

export default App
