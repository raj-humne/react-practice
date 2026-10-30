import React from 'react'
import Header from './components/Header.jsx'

const App = () => {
  return (
    <>
    <Header className='text-3xl text-white'/>
    <nav className='bg-black flex items-center gap-10 justify-between py-3.5 px-7'>
      <h1 className='text-2xl text-white'>Raj</h1>
      <ul className='flex gap-10 items-center text-white'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
      </nav>
    </>
  )
}

export default App