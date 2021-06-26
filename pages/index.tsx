import React from 'react'
import { useStyles } from '../public/assets/styles/styles.web'
import { Typography, Grid, Paper, Link } from '@material-ui/core'

export default function AppIndex() {
    const style = useStyles()

    return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#191970" }}>
            <Typography className={style.textColor} variant="h3" style={{ marginTop: 32 }} paragraph>
                AIZero Training
            </Typography>
            <Typography className={style.textColor} paragraph>
                A training platform for people works for AIZero
            </Typography>
            <Grid container style={{ marginTop: 32, marginBottom: 32 }} justify="center" >
                <Grid item key={"ios"}>
                    <Link href="/ios/GetStarted">
                        <Paper style={{ backgroundColor: "lightgray", width: 400, height: 400, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: 16, borderRadius: 30 }} elevation={24} >
                            <Typography variant="h3" style={{ color: "white" }}>iOS</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item key={"android"}>
                    <Paper style={{ backgroundColor: "lime", width: 400, height: 400, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: 16, borderRadius: 30 }} elevation={24} >
                        <Typography variant="h3" style={{ color: "white" }}>Android</Typography>
                        <Typography variant="h5" style={{ color: "white" }}>Should be covered in the future</Typography>
                    </Paper>
                </Grid>
                <Grid item key={"web"}>
                    <Link href="/web/GetStarted">
                        <Paper style={{ backgroundColor: "skyblue", width: 400, height: 400, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: 16, borderRadius: 30 }} elevation={24} >
                            <Typography variant="h3" style={{ color: "white" }}>Web</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item key={"server"}>
                    <Paper style={{ backgroundColor: "#454545", width: 400, height: 400, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: 16, borderRadius: 30 }} elevation={24} >
                        <Typography variant="h3" style={{ color: "white" }}>Server side</Typography>
                        <Typography variant="h5" style={{ color: "white" }}>Should be covered in the future</Typography>
                    </Paper>
                </Grid>
                <Grid item key={"swiftui"}>
                    <Paper style={{ backgroundColor: "orange", width: 400, height: 400, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: 16, borderRadius: 30 }} elevation={24} >
                        <Typography variant="h3" style={{ color: "white" }}>SwiftUI</Typography>
                        <Typography variant="h5" style={{ color: "white" }}>Should be covered in the future</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )


}