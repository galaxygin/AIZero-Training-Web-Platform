import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { List, ListItem, Link, ListItemText, Drawer, Divider, Toolbar } from '@material-ui/core'

const menu = [{ "title": "Get started", "uri": "GetStarted" },
{ "title": "Setup environment", "uri": "SetupEnvironment" },
{ "title": "Create a new Project", "uri": "CreateProject" },
{ "title": "Run the project in dev mode", "uri": "RunTheProjectInDevMode" },
{ "title": "Project Structure", "uri": "ProjectStructure" },
{ "title": "Edit index.tsx", "uri": "EditIndex" },
{ "title": "Setup Material-UI", "uri": "SetupMUI" },
{ "title": "How to design a page", "uri": "HowToDesignPage" },
{ "title": "useState()", "uri": "UseState" },
{ "title": "useEffect()", "uri": "UseEffect" },
{ "title": "function()", "uri": "Function" },
{ "title": "Page routing", "uri": "PageRouting" },
{ "title": "List", "uri": "List" },
{ "title": "Grid", "uri": "Grid" },
{ "title": "App Bar", "uri": "AppBar" },
{ "title": "RestAPI", "uri": "RestAPI" }]
const firebase = [{ "title": "Setup Firebase", "uri": "SetupFirebase" },
{ "title": "Firestore", "uri": "Firestore" }]

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
                <ListItem>
                    <Link href={"https://github.com/Aizero-Inc/Next-Training"} target="_blank">
                        <ListItemText primary={"Sample project repo"} className={styles.textColor} />
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
                <Divider />
                <List>
                    {firebase.map((item) => (
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