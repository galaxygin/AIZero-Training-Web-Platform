import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
import actionConnected from '../../public/assets/images/apple/Project_storyboard_action_connected.jpg'
import suggestions from '../../public/assets/images/apple/Project_view_suggestions.jpg'

export default function IOSUpdateView() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                Update View
            </Typography>
            <Typography paragraph>
                We've created this project on last session. On this session we'll learn how to update label view<br />
                <img src={actionConnected} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography variant="h5" paragraph>Change text of label</Typography>
            <Typography paragraph>
                The way to change the label text is very simple.
            </Typography>
            <Typography paragraph>
                label.text = "Hello world"
            </Typography>
            <Typography variant="h5" paragraph>Change other property of view</Typography>
            <Typography paragraph>
                When you are typing label.text, the Xcode should suggested you some codes like this.<br />
                <img src={suggestions} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography paragraph>
                If you want to change the textColor, you can do this<br />
                label.textColor = .black
            </Typography>
            <Typography variant="h6" paragraph>
                This is the way to control the label, but other views can be handled with same ways as well
            </Typography>
        </main>
    )
}