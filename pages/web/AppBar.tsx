import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'

export default function AppBar() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >App Bar</Typography>
                <Typography className={styles.textColor} >
                    We will learn how to put the bar on the top:<br />
                    It's very simple.<br /><br />
                    Import these components
                </Typography>
                <input className={styles.cmdInput} readOnly value={"import { AppBar, Toolbar, Typography } from '@material-ui/core'"} />
                <input className={styles.cmdInput} readOnly value={"import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'"} />
                <Typography className={styles.textColor}>
                    Define the style
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);`} style={{ height: calculateEditorHeight(13) }} />
                <Typography className={styles.textColor}>
                    Inside return(), this is the implementation of the simple App Bar
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`<AppBar position="static">
    <Toolbar>
        <Typography variant="h6" className={classes.title}>
            Next Training
        </Typography>
    </Toolbar>
</AppBar>`} style={{ height: calculateEditorHeight(7) }} />
                <Typography className={styles.textColor}>
                    You should want to do like this in real development
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`<div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Next Training
            </Typography>
        </Toolbar>
    </AppBar>
    <main>
        {/* Put the content to here */}
    </main>
</div>`} style={{ height: calculateEditorHeight(12) }} />
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn the design of implementing RestAPI.
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}