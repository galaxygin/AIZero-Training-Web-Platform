import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'

export default function ProjectStructure() {
    const style = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph >Project structure</Typography>
                <Typography className={style.textColor} paragraph >
                    If you look at project folder, the files and folders should be listed like this:
                </Typography>
                <textarea value={"/.git\n/node_modules\n/pages\n/public\n/styles\n.eslintrc\n.gitignore\nnext.config.js\nnext-env.d.ts\npackage.json\npackage-lock.json\nREADME.md\ntsconfig.json"} className={style.cmdInput} style={{ height: 270 }} readOnly />
                <Typography className={style.textColor} paragraph>
                    First, make sure the terminal directory is at project directory. Then run<br />
                    <input readOnly className={style.cmdInput} value="yarn next dev" /><br /><br />
                </Typography>
                <Typography className={style.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={style.textColor}>
                    We will look the structure of the project
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}