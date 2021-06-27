import { Auth, Firebase } from "../../FirebaseManager"

const provider = new Firebase.auth.GoogleAuthProvider();

export async function signInWithEmail(email: string, password: string) {
    return Auth.signInWithEmailAndPassword(email, password)
}

export function signInWithGoogle() {
    return Auth.signInWithPopup(provider)
}

export function signUp(email: string, password: string) {
    return Auth.createUserWithEmailAndPassword(email, password)
}

export function getUser() {
    return Auth.currentUser
}

export function sendPasswordReset(email: string) {
    return Auth.sendPasswordResetEmail(email)
}

export function signOut() {
    return Auth.signOut()
}