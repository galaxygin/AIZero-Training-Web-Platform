import React, { useState } from "react";
import { useStyles } from "../public/assets/styles/styles.web";
import { Typography, TextField, Button, Link } from "@material-ui/core";
import { signInWithEmail } from "../api/request/AuthRequest";
import Alert from '@material-ui/lab/Alert';

export default function SignIn() {
    const styles = useStyles()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState(null)

    function signIn() {
        signInWithEmail(email, password).then(result => {
            window.location.reload()
        }).catch(error => setErrorMsg(error.message))
    }

    function renderAlert() {
        if (errorMsg) {
            return <Alert severity="error" style={{ marginBottom: 8 }}>{errorMsg}</Alert>
        }
    }
    return <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography className={styles.textColor} variant="h3" style={{ marginTop: 100 }} paragraph>
            AIZero Training
        </Typography>
        <div style={{ backgroundColor: "#454545", width: "50%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: 16, marginTop: 100 }}>
            <Typography className={styles.textColor} variant="h4" paragraph>Sign in</Typography>
            <Typography className={styles.textColor} paragraph>Only people works for AIZero can access to the platform</Typography>
            {renderAlert()}
            <form noValidate autoComplete="on" style={{ margin: 8 }}>
                <TextField
                    required
                    id="filled-required"
                    label="AIZero Email"
                    type="email"
                    autoComplete="email"
                    variant="filled"
                    onChange={e => setEmail(e.target.value)}
                    style={{ backgroundColor: "white", width: 300 }}
                /><br /><br />
                <TextField
                    required
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    onChange={e => setPassword(e.target.value)}
                    style={{ backgroundColor: "white", width: 300 }}
                /><br /><br />
                <Button variant="outlined" onClick={() => signIn()} style={{ width: 300, color: "white", backgroundColor: "red" }}>Sign in</Button><br /><br />
                <Link target="_blank" href="" style={{ color: "skyblue" }}>Forgot password?</Link>
            </form>
        </div>
    </div>
}