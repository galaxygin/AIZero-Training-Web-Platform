import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { showImage } from '../../component/ImageManager'
import { showEditor } from '../../component/EditorManager'
import Header from '../Header'

export default function SetupFirebase() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Setup Firebase</Typography>
                <Typography className={styles.textColor}>
                    We will learn how to setup Firebase for website:<br />
                    First, go <a href="https://console.firebase.google.com/" target="_blank">here</a> and create Firebase project.<br />
                    After the project has been created, you can see the page like this.
                </Typography>
                {showImage("/assets/images/web/Firebase_project_overview.png")}
                <Typography className={styles.textColor}>Now click add app and add your website. </Typography>
                {showImage("/assets/images/web/Firebase_project_register_app_name.png")}
                <Typography className={styles.textColor}>After the website has been added, click continue. We don't setup the config this way</Typography>
                {showImage("/assets/images/web/Firebase_project_app_registered.png")}
                <Typography className={styles.textColor}>Then go to project setting. We need to copy the config on bottom of the "General" section.</Typography>
                {showImage("/assets/images/web/Firebase_project_setting_general.png")}
                <Typography className={styles.textColor}>Now, create FirebaseManager.tsx on top of project folder for easier access to Firebase instance.<br />Don't forget to REPLACE the config with your config</Typography>
                {showEditor(`import firebase from "firebase/app"

const config = {
    apiKey: "AIzaSyAd5KWYbEQqgKkmsEsWbvqmhgm0aO5Eb5g",
    authDomain: "aizero-training.firebaseapp.com",
    databaseURL: "https://aizero-training.firebaseio.com",
    projectId: "aizero-training",
    storageBucket: "aizero-training.appspot.com",
    messagingSenderId: "173943450195",
    appId: "1:173943450195:web:e4d63529594c2fa7f0b4a6",
    measurementId: "G-B4VL4LL139"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

export const Firebase = firebase
export const Firestore = firebase.firestore();
export const Auth = firebase.auth()
export const Storage = firebase.storage()
export function Timestamp() { return firebase.firestore.Timestamp.now() }`, 25, "FirebaseManager.tsx")}
                <Typography className={styles.textColor}>
                    Now the project will have easier access by importing each Feature
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Setup Firebase" url="https://training.aizero.com.au/web/SetupFirebase" />} selectedPlatform="web" />
}