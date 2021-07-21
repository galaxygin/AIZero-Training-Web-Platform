import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'

export default function WebGetStarted() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Get Started</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will use following frameworks and softwares to develop a website:
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    ・<a href="https://reactjs.org/" target="_blank">React</a>: One of the major web framework<br />
                    ・<a href="https://nextjs.org/" target="_blank">Next.js</a>: One of the web framework to develop dynamic pages<br />
                    ・<a href="https://material-ui.com/" target="_blank">Material-UI</a>: One of the major web design framework<br />
                    ・<a href="https://firebase.google.com/" target="_blank">Firebase</a>: One of the major cloud service designed to develop server-less web service<br />
                    ・<a href="https://supabase.io" target="_blank">Supabase</a>: Firebase alternative. Newly released cloud service designed to develop server-less web service<br />
                    ・<a href="https://nodejs.org/en/" target="_blank">Node.js</a>: For initializing and setting up the project and managing packages<br />
                    ・<a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable" target="_blank">Yarn</a>: For managing packages<br />
                    ・<a href="https://code.visualstudio.com/" target="_blank">VS Code</a>: One of the major editor developed by Microsoft<br /><br />
                    The language we will use is mainly Typescript and maybe some JavaScript
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will be setting up the environment on next step
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Get started - Web" url="https://training.aizero.com.au/web/GetStarted" />} selectedPlatform="web" />
}