import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import Page from '../page'

export default function IOSGetStarted() {
    const style = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph >Get Started</Typography>
                <Typography className={style.textColor} paragraph >
                    We will use following to develop an app for iOS:
                </Typography>
                <Typography className={style.textColor} paragraph>
                    ・macOS: OS for Mac (Latest version is prefered)
                </Typography>
                <Typography className={style.textColor} paragraph>
                    ・Xcode: Software for developing App (Latest version is prefered and you can install it from Mac App Store)
                </Typography>
                <Typography className={style.textColor} paragraph>
                    ・CocoaPods: A package manager for dependencies. If you haven't installed yet, install it using following command on Terminal app.
                </Typography>
                <Typography className={style.textColor} paragraph>sudo gem install cocoapods</Typography>
                <Typography className={style.textColor} paragraph>Then setup by following command</Typography>
                <Typography className={style.textColor} paragraph>pod setup</Typography>
                <Typography className={style.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={style.textColor}>
                    If you have done these things, you are ready to go. Let's create a new project in next step.
                </Typography>
            </div>
        )
    }

    return <Page content={renderContent()} />
}