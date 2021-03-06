import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'
import { showImage } from '../../component/ImageManager'

export default function SetupMUI() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Setup Material-UI</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will setup the Material-UI with Server Side Rendering enabled:<br />
                    SSR enabled sample is <a href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs" target="_blank">here</a> and we will do the same thing.<br /><br />
                    First, replace the content of _app.tsx to <a href="https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js" target="_blank">this</a><br />
                    You can copy and paste from the link, but you may need some replacement like this
                </Typography>
                {showImage(`/assets/images/web/_app.png`)}<br /><br />
                <Typography className={styles.textColor}>
                    Create _document.tsx on same directory of _app.tsx and copy and paste <a href="https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js" target="_blank">following</a>
                </Typography>
                {showImage(`/assets/images/web/_document.png`)}<br /><br />
                <Typography className={styles.textColor}>
                    Create <a href="https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/theme.js" target="_blank">theme.tsx</a> to the place you want. I created under /public/assets/styles (Created folder as well)<br />
                    *Don't forget to replace the imports of this file on _app.tsx and _document.tsx<br />
                    *You can replace the color to your prefered color<br />
                    *"createMuiTheme" have RENAMED to "createTheme" in NEWER version<br />
                </Typography>
                {showImage(`/assets/images/web/theme.png`)}<br /><br />
                <Typography className={styles.textColor}>
                    After you've done these, the Material-UI should be ready for SSR
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will start designing the page using MUI
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Setup Material-UI - Web" url="https://training.aizero.com.au/web/SetupMUI" />} selectedPlatform="web" />
}