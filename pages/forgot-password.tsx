import React, { useState } from "react";
import { useStyles } from "../public/assets/styles/styles.web";
import { Typography, TextField, Button } from "@material-ui/core";
import { sendPasswordReset } from "../api/request/AuthRequest";
import Alert from '@material-ui/lab/Alert';

export default function ForgotPassword() {
    const styles = useStyles()
    const [email, setEmail] = useState("")
    const [emailSent, setEmailStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    function sendMail() {
        sendPasswordReset(email).then(() => {
            setEmailStatus(true)
        }).catch(error => {
            setErrorMsg(error.message)
        })
    }

    function renderAlert() {
        if (emailSent) {
            return <Alert severity="success" style={{ marginBottom: 8 }}>The password reset link has been sent</Alert>
        }
        if (errorMsg) {
            return <Alert severity="error" style={{ marginBottom: 8 }}>{errorMsg}</Alert>
        }
    }

    return <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography className={styles.textColor} variant="h3" style={{ marginTop: 100 }} paragraph>
            AIZero Training
        </Typography>
        <div style={{ backgroundColor: "#454545", width: "50%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: 16, marginTop: 100 }}>
            <Typography className={styles.textColor} variant="h4" paragraph>Password Reset</Typography>
            <Typography className={styles.textColor} paragraph>Enter your AIZero email address so we can send you the link to reset the password</Typography>
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
                <Button variant="outlined" onClick={() => sendMail()} style={{ width: 300, color: "white", backgroundColor: "red" }}>Submit</Button><br /><br />
            </form>
        </div>
    </div>
}