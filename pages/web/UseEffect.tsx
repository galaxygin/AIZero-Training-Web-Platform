import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'
import { showCmdInput, showEditor } from '../../component/EditorManager'

export default function UseEffect() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >useEffect()</Typography>
                <Typography className={styles.textColor} >
                    We will learn how to use useEffect():<br />
                    useEffect() is used for initializing and keep up with the changes for the objects<br /><br />
                    It works this way<br />
                    import<br />
                    {showCmdInput(`import { useEffect } from 'react'`)}<br /><br />
                    Usage(Initializing)
                </Typography>
                {showEditor(`useEffect(() => {
    //Do something
}, [])`, 3, "HelloWorld.tsx")}<br />
                <Typography className={styles.textColor}>Usage(Keep up for the changes of the objects)</Typography>
                {showEditor(`useEffect(() => {
    //Do something
    //Latest value of someValue keeps up as well
}, [someValue])`, 4, "HelloWorld.tsx")}<br />
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn how to use function() on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="useEffect() - Web" url="https://training.aizero.com.au/web/UseEffect" />} selectedPlatform="web" />
}