import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'

export default function UseEffect() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >useEffect()</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will learn how to use useEffect():<br />
                    useEffect() is used for initializing and keep up with the changes for the objects<br /><br />
                    It works this way<br />
                    import<br />
                    <input readOnly className={styles.cmdInput} value={`import { useEffect } from 'react'`} /><br />
                    Usage(Initializing)<br />
                    <textarea readOnly className={styles.editorStyle} value={`useEffect(() => {
    //Do something
}, [])`} style={{ height: calculateEditorHeight(3) }} /><br />
                    Usage(Keep up for the changes of the objects)<br />
                    <textarea readOnly className={styles.editorStyle} value={`useEffect(() => {
    //Do something
    //Latest value of someValue keeps up as well
}, [someValue])`} style={{ height: calculateEditorHeight(4) }} /><br />
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn how to use function() on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}