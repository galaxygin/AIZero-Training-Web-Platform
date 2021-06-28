import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { List, ListItem, Link, ListItemText, Drawer, Divider, Toolbar } from '@material-ui/core'

const menu = [{ "title": "Get started", "uri": "GetStarted" },
{ "title": "Set up environment", "uri": "SetUp-Environment" },
{ "title": "Create a new Project", "uri": "CreateProject" },
{ "title": "Run the project in dev mode", "uri": "RunTheProjectInDevMode" }]

export default function WebDrawer() {
    const styles = useStyles()

    return (
        <Drawer
            className={styles.drawer}
            classes={{
                paper: styles.drawerPaper,
            }}
            variant="permanent"
            anchor="left"
            open
        >
            <div style={{ backgroundColor: "#454545", height: "100%" }}>
                <Toolbar />
                <ListItem>
                    <ListItemText primary={"©︎ AIZero Inc. 2021"} className={styles.textColor} />
                </ListItem>
                <Divider />
                <ListItem>
                    <Link href={"/"} color="inherit">
                        <ListItemText primary={"Home"} className={styles.textColor} />
                    </Link>
                </ListItem>
                <Divider />
                <List>
                    {menu.map((item) => (
                        <ListItem key={item.title} >
                            <Link href={"/web/" + item.uri} color="inherit">
                                <ListItemText primary={item.title} className={styles.textColor} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer >
    )
}