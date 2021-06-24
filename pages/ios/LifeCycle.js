import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
import ios_lifecycle from '../../public/assets/images/apple/ios_lifecycle.jpg'
import vc_lifecycle from '../../public/assets/images/apple/vc_lifecycle.jpg'

export default function LifeCycle() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph >
                LifeCycle
            </Typography>
            <Typography paragraph>iOS has it's own lifecycles. LifeCycle is the functions called automatically when the event happens.<br />
            Most of the built-in class on UIKit has their own lifecycles depends on how they are going to be used.<br />
            Images below is from the Apple's website</Typography>
            <Typography variant="h5" paragraph>LifeCycle of iOS</Typography>
            <img src={ios_lifecycle} width={"40%"} height={"30%"} alt="" />
            <Typography variant="h5" paragraph>LifeCycle of UIViewController</Typography>
            <img src={vc_lifecycle} width={"40%"} height={"30%"} alt="" />
        </main>
    )
}