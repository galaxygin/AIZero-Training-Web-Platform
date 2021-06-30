import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'

export default function ProjectStructure() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Project structure</Typography>
                <Typography className={styles.textColor} paragraph >
                    If you look at project folder, the files and folders should be listed like this:<br />
                    <textarea readOnly className={styles.editorStyle} value={"/.git\n/node_modules\n/pages\n/public\n/styles\n.eslintrc\n.gitignore\nnext.config.js\nnext-env.d.ts\npackage.json\npackage-lock.json\nREADME.md\ntsconfig.json"} style={{ height: calculateEditorHeight(13) }} /><br />
                    On the list above, usually you'll need to care at<br />
                    /pages<br />
                    /public<br />
                    only. Others are the configuration files and libraries.<br /><br />
                    At this stage, followings should be listed in /pages folder<br />
                    <textarea readOnly className={styles.editorStyle} value={"/api\n_app.tsx\nindex.tsx"} style={{ height: calculateEditorHeight(3) }} /><br />
                    The content of index.tsx will be showed when you accessed to the site.<br />
                    You should mot edit _app.tsx unless if you have to.(Will edit later to configure MUI)<br />
                    /api is for storing api related files when tranzacting data with servers. I put this folder on root(top) directory because api is not related to a page<br />
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will look into index.tsx
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}