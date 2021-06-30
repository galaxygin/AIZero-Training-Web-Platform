import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'

export default function EditIndex() {
    const style = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph >Edit index.tsx</Typography>
                <Typography className={style.textColor} paragraph >
                    We will now open the project with VS Code and edit index.tsx:<br />
                    *Replace all steps with your editor if you don't use VS Code.<br /><br />
                    Open the VS Code<br />
                    <img src={"https://training.aizero.com.au/assets/images/web/VSCode_opened.png"} width={"60%"} height={"40%"} alt="" /><br />
                    Then click "Open Folder" and select the project directory. Then the editor will show the files and folders<br />
                    <img src={"https://training.aizero.com.au/assets/images/web/VSCode_project_opened.png"} width={"60%"} height={"40%"} alt="" /><br />
                    Click the pages and open the index.tsx. The codes in here are shown on the website currently<br />
                    <img src={"https://training.aizero.com.au/assets/images/web/VSCode_index_opened.png"} width={"60%"} height={"40%"} alt="" /><br /><br />
                    On React, we develop pages using function (React Hook) or class and export it.<br />
                    The default enables exporting as primary export. If you don't forget export, the page and build won't work<br /><br />
                    On Next.js, function based development is familiar. So we will learn function based development.<br />
                    When you see the Home() function, you can see it's just returning the div codes.<br />
                </Typography>
                <p style={{ fontWeight: "bold", color: "white", borderColor: "red", fontSize: 18 }}>On function based development, returning the div code will show a page<br />
                    So return the code you are going to put into the {`<body>`}</p><br />
                <Typography className={style.textColor} paragraph>
                    Also you can see the imports on top of the file. React usually use "import" to use other file. Most of them are TS or JS file.<br />
                    You can import the functions or modules inside the project folder. Modules are need to be installed via "yarn" or "npm" and installed packages are listed on package.json.<br />
                    The functions will be usable by exporting them. Most of the usages are RestAPI.<br /><br />
                    If you want to check how the changes are effected, run the dev server from Terminal<br />
                    <input readOnly className={style.cmdInput} value={"yarn next dev"} /><br />
                    and access<br />
                    <input readOnly className={style.cmdInput} value={"localhost:3000/{name of the page if not index}"} /><br />
                </Typography>
                <Typography className={style.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={style.textColor}>
                    We will integrate Material-UI on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}