import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'

export default function GetStarted() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Get started</Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>What is Firebase?</Typography>
                <Typography className={styles.textColor} paragraph>
                    Firebase is a cloud infrastructure service, providing cloud server service to develop serverless app.<br />
                    They have variety of services like:<br />
                    ・Firestore: Document based No SQL Database<br />
                    ・Auth: Handling user sign in / sign up<br />
                    ・Storage: Storing some files like images<br />
                    ・Hosting: Can host a project to the web if you upload web pages<br />
                    ・Functions: Can execute some tasks on cloud server. Works like RestAPI<br />
                    ・Cloud Messaging: Can send a notification to the devices<br /><br />
                    To use those features, you need to create a Firebase project on <a href="https://console.firebase.google.com/" target="_blank">Firebase console</a>.
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Supported Platforms</Typography>
                <Typography className={styles.textColor} paragraph>
                    Firebase platform is designed to use with<br />
                    ・Web<br />
                    ・iOS<br />
                    ・Android<br />
                    ・Unity<br /><br />
                    The data of each features can be shared across the platforms by adding each apps to the project console and setup the app with same config.
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Pricing</Typography>
                <Typography className={styles.textColor} paragraph>
                    You can start the project from free plan without paying money.<br />
                    If you've used each feature over its limit, the plan will be switched to the "pay as you go" plan and pay based on the usage.<br />
                    Its still very cheap compared to building and maintaining your own server
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Get started - Firebase" url="https://training.aizero.com.au/firebase/GetStarted" />} selectedPlatform="firebase" />
}