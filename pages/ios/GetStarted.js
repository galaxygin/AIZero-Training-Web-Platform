import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public../../public/assets/styles/styles'
import Page from '../page'

export default function IOSGetStarted() {
    const style = useStyles()

    function renderContent() {
        return (
            <main className={style.content}>
                <div className={style.toolbar} />
                <Typography variant="h3" paragraph >Get Started</Typography>
                <Typography paragraph >
                    We will use following to develop an app for iOS:
                 </Typography>
                <Typography paragraph>
                    ・macOS: OS for Mac (Latest version is prefered)
            </Typography>
                <Typography paragraph>
                    ・Xcode: Software for developing App (Latest version is prefered and you can install it from Mac App Store)
            </Typography>
                <Typography paragraph>
                    ・CocoaPods: A package manager for dependencies. If you haven't installed yet, install it using following command on Terminal app.
            </Typography>
                <Typography paragraph>sudo gem install cocoapods</Typography>
                <Typography paragraph>Then setup by following command</Typography>
                <Typography paragraph>pod setup</Typography>
                <Typography variant="h4" paragraph>Next</Typography>
                <Typography>
                    If you have done these things, you are ready to go. Let's create a new project in next step.
            </Typography>
            </main>
        )
    }

    return <Page content={renderContent()} />
}