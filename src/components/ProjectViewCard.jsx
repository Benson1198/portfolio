import React from 'react'
import { Paper, Button } from '@mui/material'

const ProjectViewCard = (props) => {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img src={props.item.image} height="100px" width="200px" alt={props.item.description} />
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default ProjectViewCard