import React from 'react'
import QuickInfo from './QuickInfo';
import Projects from './Projects';
import Skills from './Skills';
import AboutMe from './AboutMe';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <AboutMe />
            <QuickInfo />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home