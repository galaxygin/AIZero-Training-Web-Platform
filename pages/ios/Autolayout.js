import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
import viewDoneImg from '../../public/assets/images/apple/Project_storyboard_done.jpg'
import addConstraintImg from '../../public/assets/images/apple/Project_storyboard_constraints.jpg'
import constraintAddedImg from '../../public/assets/images/apple/Project_storyboard_constraint_added.jpg'
import editConstraintImg from '../../public/assets/images/apple/Project_storyboard_edit_constraint.jpg'

export default function Autokayout() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                Autolayout
            </Typography>
            <Typography paragraph>Autolayout is designed to render the views with same looks between different screen sizes by adding constraints.</Typography>
            <Typography paragraph>
                We will use the screen created on previous session<br />
                <img src={viewDoneImg} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography variant="h5">Add constraint</Typography>
            <Typography paragraph>
                Now let's add constraints to that screen. Open add constraints. The image helps you find how to open it.<br />
                <img src={addConstraintImg} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography paragraph>
                If the constraint is added without errors or warnings, the blue borders will show up.<br />
                <img src={constraintAddedImg} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography variant="h5">Edit constraint</Typography>
            <Typography paragraph>
                If you want to edit constraint, go on the configration on the right and switch to this screen like image<br />
                <img src={editConstraintImg} width={"60%"} height={"40%"} alt="" />
            </Typography>
        </main>
    )
}