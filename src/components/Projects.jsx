import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ProjectViewCard from './ProjectViewCard'

const Projects = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "https://user-images.githubusercontent.com/34964177/279663088-ec3fe9be-1594-454d-ac53-8102cbac8d1e.png"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "https://user-images.githubusercontent.com/34964177/279667053-4af99da9-6164-45ed-8768-7421692913f2.png"
        }
    ]

    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <ProjectViewCard key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

export default Projects