import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStyles } from '../public/assets/styles/styles.web'
import { Typography, Grid, Paper, Link, IconButton, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';
import PageCore from './PageCore'
import { signOut } from '../api/request/AuthRequest';
import { useCookies } from 'react-cookie'
import { getUserInfo } from '../api/request/UserRequest'

export default function AppIndex() {
    const styles = useStyles()
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState(null);
    const [innerWidth, setInnerWidth] = useState(0)
    const [thumbnail_url, setThumbnailUrl] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies(['uid'])

    const isMenuOpen = Boolean(anchorEl);

    useEffect(() => {
        setInnerWidth(window.innerWidth)
        if (cookies.uid) {
            getUserInfo(cookies.uid).then(doc => {
                setThumbnailUrl(doc.data().thumbnail_url)
            })
        }
    }, [])

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={() => setAnchorEl(null)}
        >
            <MenuItem onClick={() => router.push("account")}>Account</MenuItem>
            <MenuItem onClick={() => signOut().then(() => {
                removeCookie('uid')
                window.location.href = "/"
            })}>Log out</MenuItem>
        </Menu>
    );

    function content() {
        return (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#191970" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", width: innerWidth - 100 }}>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <Typography className={styles.textColor} variant="h3" style={{ marginTop: 32 }} paragraph>
                            AIZero Training
                        </Typography>
                        <Typography className={styles.textColor} paragraph>
                            A training platform for people works for AIZero
                        </Typography>
                    </div>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={e => setAnchorEl(e.currentTarget)}
                        color="inherit"
                        style={{ borderRadius: 50 }}
                    >
                        {(thumbnail_url == "") ? <AccountCircle style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50 }} /> : <img src={thumbnail_url} width={100} height={100} style={{ borderRadius: 50 }} />}
                    </IconButton>
                </div>
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
                            <Typography variant="h5" style={{ color: "white" }}>May be covered in the future</Typography>
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
                            <Typography variant="h5" style={{ color: "white" }}>May be covered in the future</Typography>
                        </Paper>
                    </Grid>
                    <Grid item key={"firebase"}>
                        <Link href="/firebase/GetStarted">
                            <Paper style={{ backgroundColor: "orange", width: 400, height: 400, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: 16, borderRadius: 30 }} elevation={24} >
                                <Typography variant="h3" style={{ color: "white" }}>Firebase</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                </Grid>
                {renderMenu}
            </div>
        )
    }

    return <PageCore content={content()} />
}