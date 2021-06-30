import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'

export default function SetUpEnvironment() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Set up environment</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will install and setting up the frameworks and softwares:
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    First, download and install <a href={"https://nodejs.org/en/"} target="_blank">Node.js</a><br />
                    Installing this enables you to use Node from the Terminal app.<br /><br />
                    Open the Terminal and install these<br />
                    Yarn: Package manager<br />
                    <input readOnly className={styles.cmdInput} value="npm install -g yarn" /><br />
                    Firebase tools: For using firebase features<br />
                    <input readOnly className={styles.cmdInput} value="npm install -g firebase-tools" /><br /><br />
                    *If you had issue like permission denied, try adding "sudo" BEFORE npm. Work as admin rights on Mac<br /><br />
                    Then download <a href="https://code.visualstudio.com/" target="_blank">VS Code</a><br />
                    *If you already have a favourite editor, you can use that if you want. However the entire session uses VS Code for coding.
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will create a project on next step
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}