import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { showImage } from '../../component/ImageManager'
import { showCmdInput, showEditor } from '../../component/EditorManager'
import Header from '../Header'

export default function Firestore() {
    const styles = useStyles()
    const managerName = "DatabaseManager.tsx"

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Firestore</Typography>
                <Typography className={styles.textColor} paragraph>
                    We will learn how to implement Firestore to the website:<br />
                    If you don't know what is Firestore, look at Firebase section first.<br /><br />
                    The codes below are based on this data
                </Typography>
                {showImage("/assets/images/web/Firebase_project_firestore_overview.png")}<br /><br />
                <Typography className={styles.textColor} variant="h4">Get Collections</Typography>
                {showCmdInput(`Firestore.collection("users").get()`)}
                <Typography className={styles.textColor}>I'll recommend to implement by this way. Create a manager file and</Typography>
                {showEditor(`import { Firestore } from "../../FirebaseManager"

export type Member = {
    name: string,
    role: string,
    uri: string
}

export function getMembers(): Promise<Member[]> {
    return new Promise(resolve => {
        Firestore.collection("users").get().then(snapshot => {
            const list: Member[] = []
            snapshot.forEach(doc => (
                list.push({ "name": doc.data().name, "role": doc.data().role, "uri": "" })
            ))
            resolve(list)
        })
    })
}`, 19, managerName)}
                <Typography className={styles.textColor}>And then access to the function by import and calling this from the page you want</Typography>
                {showEditor(`getMembers().then(list => {
    setMembers(list)
})`, 3, managerName)}
                <Typography className={styles.textColor}>Put into the view like this. *Don't forget to define the list with useState()</Typography>
                {showEditor(`<List>
    {members.map((item) =>
        <ListItem key={item.name}>
            <Link href={"/" + item.uri} color="inherit">
                <ListItemText primary={item.name + ": " + item.role} className={styles.textColor} />
            </Link>
        </ListItem>
    )}
</List>`, 9, managerName)}<br />
                <Typography className={styles.textColor} variant="h4">Get a document</Typography>
                {showCmdInput(`Firestore.collection("users").doc(docId).get()`)}
                <Typography className={styles.textColor}>Add a function into manager file</Typography>
                {showEditor(`export function getMemberProfile(uid: string): Promise<Member> {
    return new Promise(resolve => {
        Firestore.collection("users").doc(uid).get().then(doc => {
            //check the doc exist
            if (doc.exists)
                //"?" is used as optional access to the object possibly null
                resolve({ "name": doc.data()?.name, "role": doc.data()?.role, "uri": "" })
        })
    })
}`, 10, managerName)}<br />
                <Typography className={styles.textColor} variant="h4">Search a document</Typography>
                <Typography className={styles.textColor}>The search operation is not only '==', '!='/{`'>'/'<'`}and more</Typography>
                {showCmdInput(`Firestore.collection("users").where('param', '==', value).get()`)}
                {showEditor(`export function searchMember(name: string): Promise<Member> {
    return new Promise(resolve => {
        Firestore.collection("users").where('name', '==', name).get().then(snapshot => {
            //The result of search function come back by list. So we have to take out document
            //If you want more than 2 docs from the result, add to the list instead
            snapshot.forEach(doc => {
                resolve({ "name": doc.data()?.name as string, "role": doc.data()?.role, "uri": "" })
            })
        })
    })
}`, 11, managerName)}<br />
                <Typography className={styles.textColor} variant="h4">Add a document</Typography>
                <Typography className={styles.textColor}>*The format has to be in dictionary format.<br />Adding a document with random docId</Typography>
                {showCmdInput(`Firestore.collection("users").add(member)`)}
                {showEditor(`export function addMember(member: Member) {
    //We don't have to return promise because we only want a callback when the operation
    //is completed and Firebase function actually returns promise inside their function
    return Firestore.collection("users").add(member)
}`, 5, managerName)}
                <Typography className={styles.textColor}>Adding a document with particular docId</Typography>
                {showCmdInput(`Firestore.collection("users").doc(docId).set(member)`)}
                {showEditor(`export function addMemberWithId(docId: string, member: Member) {
    return Firestore.collection("users").doc(docId).set(member)
}`, 3, managerName)}<br />
                <Typography className={styles.textColor} variant="h4">Update the data of a document</Typography>
                <Typography className={styles.textColor}>Specify the document you want to update and give the params you wanna change.</Typography>
                {showCmdInput(`Firestore.batch().update(Firestore.collection("users").doc(uid), { 'name': name, "profile": profile }).commit()`)}
                {showEditor(`export function updateMemberInfo(uid: string, name: string, profile: string) {
    return Firestore.batch().update(Firestore.collection("users").doc(uid), { 'name': name, "profile": profile }).commit()
}`, 3, managerName)}<br />
                <Typography className={styles.textColor} variant="h4">Delete a document</Typography>
                {showCmdInput(`Firestore.collection("users").doc(uid).delete()`)}
                {showEditor(`export function removeMember(uid: string) {
    return Firestore.collection("users").doc(uid).delete()
}`, 3, managerName)}
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="Firestore - Web" url="https://training.aizero.com.au/web/Firestore" />} selectedPlatform="web" />
}