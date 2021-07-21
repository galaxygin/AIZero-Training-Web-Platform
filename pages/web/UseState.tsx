import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'
import { showCmdInput, showEditor } from '../../component/EditorManager'

export default function UseState() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >useState()</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will learn how to use useState():<br />
                    useState() is a React Hook that works on holding and changing a value<br /><br />
                    It works this way<br />
                    import<br />
                    {showCmdInput(`import { useState } from 'react'`)}<br />
                    Define<br />
                    {showCmdInput(`const [value, setValue] = useState(initial value)`)}<br />
                    Change value<br />
                    {showCmdInput(`setValue(value)`)}<br />
                    Read value<br />
                    {showCmdInput(`value`)}<br /><br />
                    Sample
                </Typography>
                {showEditor(`const [name, setName] = useState('React')
setValue('Next') //React changed to Next
value //Next`, 3, "HelloWorld.tsx")}
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn how to use useEffect on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="useState() - Web" url="https://training.aizero.com.au/web/UseState" />} selectedPlatform="web" />
}