import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'

export default function PageRouting() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Page routing</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will learn more usage of the function():<br />
                    Currently we are using it to show a page. However we can use function inside function to handle event<br />
                    *Such as when a button is pressed, something has been entered<br /><br />
                    In this session, we'll create a function with input, button and text, displaying what is entered<br />
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn how to use function() on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Page routing - Web" url="https://training.aizero.com.au/web/PageRouting" />} selectedPlatform="web" />
}