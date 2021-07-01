import { Firestore, Storage } from "../../FirebaseManager";
import { getUser } from "./AuthRequest";

export function getUserInfo(uid: string) {
    return Firestore.collection("users").doc(uid).get()
}

export function updateUserInfo(uid: string, name: string, profile: string) {
    return Firestore.batch().update(Firestore.collection("users").doc(uid), { 'name': name, "profile": profile }).commit()
}

export function uploadThumbnail(image: File): Promise<string> {
    var file = Storage.ref('/thumbnails').child(getUser().uid + '.jpg').put(image)
    return new Promise(resolve => {
        file.on('state_changed', () => { }, error => {
            throw error
        }, () => {
            file.snapshot.ref.getDownloadURL().then(async url => {
                Firestore.batch().update(Firestore.collection("users").doc(getUser().uid), { thumbnail_url: url }).commit()
                resolve(url)
            })
        })
    })
}