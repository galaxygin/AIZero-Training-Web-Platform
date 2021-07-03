import React, { useState, useEffect, BaseSyntheticEvent } from "react";
import { useStyles } from "../public/assets/styles/styles.web";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Typography, TextField, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, CircularProgress } from "@material-ui/core";
import { AccountCircle, Edit, Done, ChevronLeft } from '@material-ui/icons';
import PageCore from "./PageCore";
import { getUser, signOut } from '../api/request/AuthRequest';
import Alert from '@material-ui/lab/Alert';
import { getUserInfo, updateUserInfo, uploadThumbnail } from "../api/request/UserRequest";
import { useCookies } from 'react-cookie'

export default function Account() {
    const styles = useStyles()
    const router = useRouter()
    const [height, setHeight] = useState(0)
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState("Name")
    const [profile, setProfile] = useState("Profile")
    const [thumbnail_url, setThumbnailUrl] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);

    const [changePW, changingPW] = useState(false)
    const [newPW, setPW] = useState("")
    const [CPW, setCPW] = useState("")
    const [errorPWMsg, setErrorPWMsg] = useState(null)

    const [changeThumb, changingThumb] = useState(false)
    const [newThumb, setNewThumb] = useState(null)
    const [thumbLoading, setThumbLoading] = useState(false)
    const [errorThumbMsg, setErrorThumbMsg] = useState(null)

    const [cookies, setCookie, removeCookie] = useCookies(['uid'])

    const isMenuOpen = Boolean(anchorEl);

    useEffect(() => {
        setHeight(window.innerHeight)
        getUserInfo(cookies.uid).then(doc => {
            setName(doc.data().name)
            setProfile(doc.data().profile)
            setThumbnailUrl(doc.data().thumbnail_url)
        })
    }, [])

    const handleThumbMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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
            <MenuItem onClick={() => {
                handleMenuClose()
                changingThumb(true)
            }}>Update thumbnail</MenuItem>
        </Menu>
    );

    function pickImage(event: BaseSyntheticEvent) {
        if (event.target.files && event.target.files[0]) {
            // const fileReader: FileReader = new myWindow.FileReader()
            // fileReader.onload = async (e: Event) => { }
            // fileReader.readAsArrayBuffer(event.target.files[0]);
            setNewThumb(event.target.files[0])
        }
    }

    function renderPWAlert() {
        if (errorPWMsg) {
            return <Alert severity="error" style={{ marginBottom: 8 }}>{errorPWMsg}</Alert>
        }
    }

    function renderThumbAlert() {
        if (errorThumbMsg) {
            return <Alert severity="error" style={{ marginBottom: 8 }}>{errorThumbMsg}</Alert>
        }
    }

    function validate() {
        if (newPW.length > 7) {
            if (newPW == CPW) {
                return false
            }
        }
        return true
    }

    function content() {
        return (
            <div style={{ backgroundColor: "#191970", height: height, opacity: 0.9 }}>
                <Dialog open={changePW} onClose={() => changingPW(false)} fullWidth>
                    <DialogTitle style={{ backgroundColor: '#454545', color: 'white' }}>Change Password</DialogTitle>
                    <DialogContent style={{ backgroundColor: '#454545', color: 'white' }}>
                        {renderPWAlert()}
                        New Password<br />
                        *Length needs to be more than 8 characters<br />
                        <TextField style={{ backgroundColor: 'white' }} type="password" onChange={e => setPW(e.target.value)} /><br />
                        Confirm Password<br />
                        <TextField style={{ backgroundColor: 'white' }} type="password" onChange={e => setCPW(e.target.value)} /><br />
                    </DialogContent>
                    <DialogActions style={{ backgroundColor: '#454545', color: 'white' }}>
                        <Button disabled={validate()} variant="contained" onClick={() => getUser().updatePassword(newPW).then(() => {
                            setPW("")
                            setCPW("")
                            changingPW(false)
                        }).catch(error => setErrorPWMsg(error.message))} color="primary" style={{ margin: 16, backgroundColor: 'red' }}>
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={changeThumb} onClose={() => {
                    setNewThumb(null)
                    changingThumb(false)
                }} fullWidth>
                    <DialogTitle style={{ backgroundColor: '#454545', color: 'white' }}>Change Thumbnail</DialogTitle>
                    <DialogContent style={{ backgroundColor: '#454545', color: 'white' }}>
                        {renderThumbAlert()}
                        <input type="file" onChange={pickImage} className="filetype" accept="image/*" id="group_image" /><br />
                        <img src={newThumb} width={100} height={100} alt={""} />
                    </DialogContent>
                    <DialogActions style={{ backgroundColor: '#454545', color: 'white' }}>
                        {(thumbLoading) ? <CircularProgress style={{ color: 'white' }} /> : <Button disabled={!newThumb} variant="contained" onClick={() => {
                            setThumbLoading(true)
                            uploadThumbnail(newThumb).then(url => {
                                setThumbnailUrl(url)
                                changingThumb(false)
                            }).catch(error => {
                                setErrorThumbMsg(error.message)
                            }).finally(() => setThumbLoading(false))
                        }} color="primary" style={{ margin: 16, backgroundColor: 'red' }}>
                            Update
                        </Button>}
                    </DialogActions>
                </Dialog>
                <div style={{ display: 'flex', padding: 16 }}>
                    <IconButton onClick={() => router.push("/")}>
                        <ChevronLeft style={{ width: 30, height: 30, color: 'white' }} />
                    </IconButton>
                    <div style={{ marginLeft: 16, display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
                        <Typography className={styles.textColor} variant="h4">
                            Account
                        </Typography>
                    </div>
                    <div style={{ flexGrow: 1 }} />
                    {(editing) ? <IconButton style={{ backgroundColor: 'lime' }} onClick={() => updateUserInfo(cookies.uid, name, profile).then(() => setEditing(false))}>
                        <Done style={{ width: 30, height: 30, color: 'white' }} />
                    </IconButton> : <IconButton style={{ backgroundColor: 'white' }} onClick={() => setEditing(true)}>
                        <Edit style={{ width: 30, height: 30, color: 'black' }} />
                    </IconButton>}
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: 'column', alignItems: "center" }}>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleThumbMenuOpen}
                        color="inherit"
                    >
                        {(thumbnail_url == "") ? <AccountCircle style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50 }} /> : <Image src={thumbnail_url} width={100} height={100} />}
                    </IconButton>
                    {(editing) ? <TextField style={{ backgroundColor: 'white' }} variant={"outlined"} value={name} onChange={e => setName(e.target.value)} /> : <Typography className={styles.textColor} variant="h3">{name}</Typography>}
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: 'dimgray', marginLeft: "16%", marginRight: "16%", marginTop: 16, padding: 16, opacity: 0.9 }}>
                    {(editing) ? <TextField style={{ backgroundColor: 'white' }} multiline variant={"outlined"} rows={5} value={profile} onChange={e => setProfile(e.target.value)} /> : <Typography className={styles.textColor}>{profile}</Typography>}
                    <Typography className={styles.textColor}>Email: {getUser()?.email}</Typography><br />
                    <Button style={{ color: 'white', borderColor: 'silver' }} onClick={() => changingPW(true)}>Change Password</Button><br />
                    <Button style={{ backgroundColor: "red", color: "white" }} onClick={() => signOut().then(() => {
                        removeCookie('uid')
                        window.location.href = "/"
                    })}>Log out</Button>
                </div>
                {renderMenu}
            </div>
        )
    }

    return <PageCore content={content()} />
}