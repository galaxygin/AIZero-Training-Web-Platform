import React, { useEffect, useState } from 'react';
import { Link, Select, MenuItem, Theme, IconButton, Menu, AppBar, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';
import Header from './Header';
import WebDrawer from './web/WebDrawer';
import IOSDrawer from './ios/iOSDrawer'
import SwiftUIDrawer from './swiftui/SwiftUIDrawer'
import AndroidDrawer from './android/AndroidDrawer'
import { signOut } from '../api/request/AuthRequest';
import PageCore from './PageCore';

export default function PageBase({ content, header = <Header />, selectedPlatform = "ios" }) {
    const drawerStyle = drawerStyles()
    const [platform, changePlatform] = useState(selectedPlatform)

    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    useEffect(() => {
        if (selectedPlatform != "ios") {
            changeDrawer(selectedPlatform)
        }
    }, [])

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function handlePlatform(e: React.ChangeEvent<{ value: unknown }>) {
        changePlatform(e.target.value as string)
        if (e.target.value === "ios") {
        }
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => signOut().then(() => {
                window.location.href = "/"
            })}>Log out</MenuItem>
        </Menu>
    );

    const changeDrawer = (platform: string) => {
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

    function renderContent() {
        return (
            <div className={drawerStyle.root}>
                {/* {header} */}
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
                        <div className={drawerStyle.grow} />
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {renderMenu}
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
    }

    return <PageCore content={renderContent()} header={header} />
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
        grow: {
            flexGrow: 1,
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);