import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
import storyboardImg from '../../public/assets/images/apple/Project_storyboard.jpg'
import addViewImg from '../../public/assets/images/apple/Project_storyboard_add_view.jpg'
import viewConfigImg from '../../public/assets/images/apple/Project_storyboard_view_config.jpg'
import viewDoneImg from '../../public/assets/images/apple/Project_storyboard_done.jpg'

export default function Storyboard() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                Storyboard
            </Typography>
            <Typography paragraph>Storyboard is used for designing and layout of the screen and connect controllers.<br />
            Now open Main.storyboard and it should look like this<br />
                <img src={storyboardImg} width={"60%"} height={"40%"} alt="" /><br />
                To add view object, click "+" button on the right side of the bar.<br />
                Then drag and drop the view to the board. I chose Label this time.<br />
            </Typography>
            <Typography paragraph>
                <img src={addViewImg} width={"60%"} height={"40%"} alt="" /><br />
                You can edit the configuration of the view by clicking it<br />
                <img src={viewConfigImg} width={"60%"} height={"40%"} alt="" /><br />
                I finally created the view like this by adding the button<br />
                <img src={viewDoneImg} width={"60%"} height={"40%"} alt="" /><br />
            </Typography>
        </main>
    )
}