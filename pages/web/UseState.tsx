import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'

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
                    <input readOnly className={styles.cmdInput} value={`import { useState } from 'react'`} /><br />
                    Define<br />
                    <input readOnly className={styles.cmdInput} value={`const [value, setValue] = useState(initial value)`} /><br />
                    Change value<br />
                    <input readOnly className={styles.cmdInput} value={`setValue(value)`} /><br />
                    Read value<br />
                    <input readOnly className={styles.cmdInput} value={`value`} /><br /><br />
                    Sample<br />
                    <textarea readOnly className={styles.editorStyle} value={`const [name, setName] = useState('React')
setValue('Next') //React changed to Next
value //Next`} style={{ height: calculateEditorHeight(3) }} />
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn how to use useEffect on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}