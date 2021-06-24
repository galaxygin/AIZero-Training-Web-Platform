import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
import img from '../../public/assets/images/apple/Project_Button_example.jpg'

export default function IOSButton() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                Button
            </Typography>
            <Typography paragraph>

            </Typography>
            <Typography paragraph>
                This session just shows you the example of updating the view when the Button is pressed<br />
                If you don't understand how this is made, read Swift variables, Connect Storyboard with class<br />
                <img src={img} width={"60%"} height={"40%"} alt="" />
            </Typography>
        </main>
    )
}