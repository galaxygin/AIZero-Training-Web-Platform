import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'
import { showCmdInput } from '../../component/EditorManager'

export default function RunTheProjectInDevMode() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Run the project in dev mode</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will run the project in dev mode:
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    First, make sure the terminal directory is at project directory. Then run<br />
                    {showCmdInput(`yarn next dev`)}<br /><br />
                    After the dev server is started, you will be able to access to the page of the project by typing localhost:3000 on your browser<br /><br />
                    At this stage, you should be seeing the content of index.tsx<br /><br />
                    You can stop the server by "Ctrl+C"(Sometimes required twice) on terminal<br />
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will look the structure of the project
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Run the project in dev mode - Web" url="https://training.aizero.com.au/web/RunTheProjectInDevMode" />} selectedPlatform="web" />
}