import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, Select, MenuItem, Theme } from '@material-ui/core';
import { useRouter } from 'next/router';
import { createStyles, makeStyles } from '@material-ui/styles';
import Header from './Header';
import SignIn from './signin';
import WebDrawer from './web/WebDrawer';
import IOSDrawer from './ios/iOSDrawer'
import SwiftUIDrawer from './swiftui/SwiftUIDrawer'
import AndroidDrawer from './android/AndroidDrawer'
import { Auth } from '../FirebaseManager';

export default function Page({ content, header = <Header /> }) {
    const drawerStyle = drawerStyles()
    const router = useRouter()
    const [platform, changePlatform] = useState("ios")

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    useEffect(() => {

    }, [])

    const handleProfileMenuOpen = (event) => {
        // setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    function handlePlatform(e) {
        changePlatform(e.target.value)
        if (e.target.value === "ios") {
        }
    }

    const changeDrawer = (platform) => {
        switch (platform) {
            case "web":
                return <WebDrawer />
            case "ios":
                return <IOSDrawer />
            case "swiftui":
                return <SwiftUIDrawer />
            case "android":
                return <AndroidDrawer />
            default:
                return <div />
        }
    }

    if (Auth.currentUser) {
        return (
            <div className={drawerStyle.root}>
                {header}
                <AppBar position="fixed" className={drawerStyle.appBar}>
                    <Toolbar>
                        <Link href="/" color="inherit">
                            <Typography variant="h6" noWrap>AIZero Training</Typography>
                        </Link>
                        <Select
                            style={{ margin: 16, color: "white" }}
                            value={platform}
                            onChange={handlePlatform}
                        >
                            <MenuItem value={"web"}>Web</MenuItem>
                            <MenuItem value={"ios"}>iOS</MenuItem>
                            <MenuItem value={"swiftui"}>SwiftUI</MenuItem>
                            <MenuItem value={"android"}>Android</MenuItem>
                        </Select>
                    </Toolbar>
                </AppBar>
                <nav className={drawerStyle.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    {changeDrawer(platform)}
                </nav>
                <main className={drawerStyle.content}>
                    <div className={drawerStyle.drawerHeader} />
                    {content}
                </main>
            </div>
        )
    } else {
        return <SignIn />
    }
}

const drawerWidth = 240;

const drawerStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#454545'
        },
        drawerContainer: {
            backgroundColor: '#454545'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);