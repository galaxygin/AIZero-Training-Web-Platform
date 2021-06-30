import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import viewDoneImg from '../../public/assets/images/apple/Project_storyboard_done.jpg'
// import addConstraintImg from '../../public/assets/images/apple/Project_storyboard_constraints.jpg'
// import constraintAddedImg from '../../public/assets/images/apple/Project_storyboard_constraint_added.jpg'
// import editConstraintImg from '../../public/assets/images/apple/Project_storyboard_edit_constraint.jpg'
import PageBase from '../PageBase'

export default function Autokayout() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph>
                    Autolayout
                </Typography>
                <Typography className={styles.textColor} paragraph>Autolayout is designed to render the views with same looks between different screen sizes by adding constraints.</Typography>
                <Typography className={styles.textColor} paragraph>
                    We will use the screen created on previous session<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_done.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={styles.textColor} variant="h5">Add constraint</Typography>
                <Typography className={styles.textColor} paragraph>
                    Now let's add constraints to that screen. Open add constraints. The image helps you find how to open it.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_constraints.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    If the constraint is added without errors or warnings, the blue borders will show up.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_constraint_added.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={styles.textColor} variant="h5">Edit constraint</Typography>
                <Typography className={styles.textColor} paragraph>
                    If you want to edit constraint, go on the configration on the right and switch to this screen like image<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_edit_constraint.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}