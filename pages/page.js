import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../public/assets/styles/styles';
import { Link, Select, MenuItem } from '@material-ui/core';
import { useRouter } from 'next/router';
// import Header from './Header';
import IOSDrawer from './ios/iOSDrawer'
import SwiftUIDrawer from './swiftui/SwiftUIDrawer'
import AndroidDrawer from './android/AndroidDrawer'

export default function Page({ content, header = null }) {
    const classes = useStyles();
    const router = useRouter()
    const [platform, changePlatform] = useState("ios")

    function handlePlatform(e) {
        changePlatform(e.target.value)
        if (e.target.value === "ios") {
        }
    }

    const changeDrawer = (platform) => {
        if (platform === "ios") {
            return <IOSDrawer />
        } else if (platform === "swiftui") {
            return <SwiftUIDrawer />
        } else if (platform === "android") {
            return <AndroidDrawer />
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.appBar}>
                    <Link href="/index" color="inherit">
                        <Typography variant="h6" noWrap>Aizero Training</Typography>
                    </Link>
                    <Select
                        style={{ margin: 16, color: "white" }}
                        value={platform}
                        onChange={handlePlatform}
                    >
                        <MenuItem value={"ios"}>iOS</MenuItem>
                        <MenuItem value={"swiftui"}>SwiftUI</MenuItem>
                        <MenuItem value={"android"}>Android</MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {changeDrawer(platform)}
            {/* <main className={classes.content}> */}
            {content}
            {/* </main> */}
        </div>
    )
}
