import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import actionConnected from '../../public/assets/images/apple/Project_storyboard_action_connected.jpg'
// import suggestions from '../../public/assets/images/apple/Project_view_suggestions.jpg'
import PageBase from '../PageBase'

export default function IOSUpdateView() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph>
                    Update View
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    We've created this project on last session. On this session we'll learn how to update label view<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard_action_connected.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Change text of label</Typography>
                <Typography className={styles.textColor} paragraph>
                    The way to change the label text is very simple.
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    label.text = "Hello world"
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Change other property of view</Typography>
                <Typography className={styles.textColor} paragraph>
                    When you are typing label.text, the Xcode should suggested you some codes like this.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_view_suggestions.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    If you want to change the textColor, you can do this<br />
                    label.textColor = .black
                </Typography>
                <Typography className={styles.textColor} variant="h6" paragraph>
                    This is the way to control the label, but other views can be handled with same ways as well
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}