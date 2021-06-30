import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
import PageBase from '../PageBase'

export default function SwiftVariables() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >
                    Swift Variables
                </Typography>
                <Typography className={styles.textColor} paragraph>The programming language express data with variable. </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Assign the value to variable:</Typography>
                <Typography className={styles.textColor} paragraph>let os = "ios"<br />
                    This assigns the value "ios" to variable os. After this the "os" will keep proving the value "ios" within valid areas.</Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Reassign the value to variable</Typography>
                <Typography className={styles.textColor} paragraph>var os = "ios"<br />
                    os="ios14"<br />
                    This assigns the value "ios" to variable os at first line and modifying the value to "ios14" at line 2.<br />
                    Note that "let" is fixed value variable and you can't change it later.</Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Valid area of variable</Typography>
                <Typography className={styles.textColor} paragraph>If you defined a variable:<br />
                    ・Inside class: Valid within whole class<br />
                    ・Inside function: Valid within that function<br />
                    ・Anywhere inside `{ }`: Valid within { }</Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Specify the Type of variable</Typography>
                <Typography className={styles.textColor} paragraph>Usually, we have to specify the type to define a variable. However there are some language which doesn't require to specify the type and Swift is one of it.<br />
                    We can specify the Type of variable by adding :type after name of variable like this<br />
                    var mode: String = "ios14"</Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Optional value</Typography>
                <Typography className={styles.textColor} paragraph>The concept of optional value is to avoid Null Pointer Exception, when tried to reference a variable with null value. Defining the variable as optional(null safe) protects the app from crushing</Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Want to define a variable without assigning the value</Typography>
                <Typography className={styles.textColor} paragraph>You may want to assign the value later on like when you want to assign the response from the server.<br />
                    However the Swift doesn't allow defining a variable without assigning value. But except when you defining as optional value.</Typography>
                <Typography className={styles.textColor} paragraph>To define a variable as optional, simply add ? after the Type<br />
                    var mode: String?</Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}