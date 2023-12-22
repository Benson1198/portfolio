import React from 'react'
import AboutMe from './components/AboutMe'
import QuickInfo from './components/QuickInfo'
import Projects from './components/Projects'
import Skills from './components/Skills'


const App = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-fixed bg-cover bg-no-repeat bg-gradient-to-r from-indigo-500 to-[#A2A2D0]'>
      <AboutMe />
      <QuickInfo />
      <Skills />
      <Projects />
    </div>
  )
}

export default App