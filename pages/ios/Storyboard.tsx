import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import storyboardImg from '../../public/assets/images/apple/Project_storyboard.jpg'
// import addViewImg from '../../public/assets/images/apple/Project_storyboard_add_view.jpg'
// import viewConfigImg from '../../public/assets/images/apple/Project_storyboard_view_config.jpg'
// import viewDoneImg from '../../public/assets/images/apple/Project_storyboard_done.jpg'
import PageBase from '../PageBase'

export default function Storyboard() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph>
                    Storyboard
                </Typography>
                <Typography className={styles.textColor} paragraph>Storyboard is used for designing and layout of the screen and connect controllers.<br />
                    Now open Main.storyboard and it should look like this<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    To add view object, click "+" button on the right side of the bar.<br />
                    Then drag and drop the view to the board. I chose Label this time.<br />
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_add_view.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    You can edit the configuration of the view by clicking it<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_view_config.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    I finally created the view like this by adding the button<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_done.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}