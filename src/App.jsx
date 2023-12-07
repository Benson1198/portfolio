import React from 'react'
import AboutMe from './components/AboutMe'
import QuickInfo from './components/QuickInfo'
import Projects from './components/Projects'


const App = () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen min-h-screen'>
      <AboutMe />
      <QuickInfo />
      <Projects />
    </div>
  )
}

export default App