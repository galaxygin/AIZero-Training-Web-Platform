import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'

export default function SetUpEnvironment() {
    const style = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph >Set up environment</Typography>
                <Typography className={style.textColor} paragraph >
                    We will install and setting up following frameworks and softwares:
                </Typography>
                <Typography className={style.textColor} paragraph>
                    ・React: One of the major web framework<br />
                    ・Next JS: One of the web framework to develop dynamic pages<br />
                    ・Material-UI: One of the major web design framework<br />
                    ・Firebase: One of the major cloud service designed to develop server-less web service<br />
                    ・Supabase: Firebase alternative. Newly released cloud service designed to develop server-less web service<br />
                    ・Node JS: For initializing and setting up the project and managing packages<br />
                    ・VS Code: One of the major editor developed by Microsoft<br />
                </Typography>
                <Typography className={style.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={style.textColor}>
                    We will create a project on next step
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}