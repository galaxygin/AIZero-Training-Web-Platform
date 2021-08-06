import { Firestore, Storage, Timestamp } from "../../FirebaseManager";
import { getUser } from "./AuthRequest";

export function getProfile(uid: string) {
    return Firestore.collection("users").doc(uid).get()
}

export function updateProfile(name: string, bio: string) {
    return Firestore.batch().update(Firestore.collection("users").doc(getUser().uid), { 'name': name, "bio": bio }).commit()
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

export function updateLastOnlineTimestamp() {
    return Firestore.batch().update(Firestore.collection("users").doc(getUser().uid), { "last_online": Timestamp() }).commit()
}