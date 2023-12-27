import React from 'react'
import QuickInfo from './QuickInfo';
import Projects from './Projects';
import Skills from './Skills';
import AboutMe from './AboutMe';

const Home = () => {
    return (
        <div>
            <AboutMe />
            <QuickInfo />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home