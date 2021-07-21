import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'

export default function Firestore() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Firestore</Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>What is Firestore?</Typography>
                <Typography className={styles.textColor} paragraph>
                    Firestore is a cloud No SQL Database.<br />
                    No SQL database is document based system.<br />
                    Document is same as json format. So imagine you can stock the list of json object.<br />
                    This means that you don't need a SQL to fetch data.
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>What you can do with Firestore</Typography>
                <Typography className={styles.textColor} paragraph>
                    The operations you can do with the No SQL is similar to the list of json.<br />
                    This means you can add, update, remove search the document, but can't make relationship with other table.<br />
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>When should I use No SQL database?</Typography>
                <Typography className={styles.textColor} paragraph>
                    No SQL database is not relational database. So it's suitable for storing the data which's not related to any other data. Such as<br />
                    ・Comment<br />
                    ・Chat<br /><br /><br />
                    To learn how to use Firestore in development, see the pages of each platform.
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Firestore - Firebase" url="https://training.aizero.com.au/firebase/Firestore" />} selectedPlatform="firebase" />
}