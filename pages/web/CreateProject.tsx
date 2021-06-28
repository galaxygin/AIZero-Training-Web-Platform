import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'

export default function CreateProject() {
    const style = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph >Create a new project</Typography>
                <Typography className={style.textColor} paragraph >
                    We will create a new project and install libraries we are using:
                </Typography>
                <Typography className={style.textColor} paragraph>
                    First, move to the directory by "cd" you want to create a project.<br />
                    <input readOnly className={style.cmdInput} value="cd {directory}" /><br />
                    *In my case, I do "cd Desktop/Github"<br /><br />
                    This command create a base of project named "practice" using <a href="https://nextjs.org/" target="_blank">Next.js</a><br />
                    <input readOnly className={style.cmdInput} value="npx create-next-app --ts next-practice" style={{ width: 300 }} /><br />
                    *npx is not wrong command<br />
                    *You can replace the "next-practice" with your prefered name<br />
                    *The terminal app will ask you to install "create-next-app" if it's not installed on your PC. Press "y"<br /><br />
                    After the project has been created, move to the directory of the project<br />
                    <input readOnly className={style.cmdInput} value="cd next-practice" /><br />
                    *Replace the "next-practice" with others if you renamed it (All times)<br /><br />
                    Then install the libraries we will use<br />
                    Material UI<br />
                    <input readOnly className={style.cmdInput} value="yarn add @material-ui/core @material-ui/icons @material-ui/lab @material-ui/styles" multiple style={{ width: 600 }} /><br />
                    *The minimum is /core, but we will need more libraries in order to use more features of MUI.<br />
                    Firebase<br />
                    <input readOnly className={style.cmdInput} value="yarn add firebase" /><br />
                    Supabase<br />
                    <input readOnly className={style.cmdInput} value="yarn add @supabase/supabase-js" /><br /><br />
                    The libraries needed at the moment are installed
                </Typography>
                <Typography className={style.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={style.textColor}>
                    We will run the project in development mode
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}