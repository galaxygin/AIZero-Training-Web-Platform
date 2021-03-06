import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { List, ListItem, Link, ListItemText, Drawer, Divider, Toolbar } from '@material-ui/core'

const menu = [{ "title": "Get started", "uri": "GetStarted" }, { "title": "Create a new project", "uri": "CreateProject" }, { "title": "Swift Variables", "uri": "SwiftVariables" }, { "title": "LifeCycle", "uri": "LifeCycle" }, { "title": "UIViewController", "uri": "UIViewController" }, { "title": "Storyboard", "uri": "Storyboard" }, { "title": "Autolayout", "uri": "Autolayout" }, { "title": "Connect Storyboard with class", "uri": "ConnectStoryboardWithClass" }, { "title": "Update view", "uri": "UpdateView" }, { "title": "Button", "uri": "Button" }, { "title": "UITableView", "uri": "UITableView" }, { "title": "UICollectionView", "uri": "UICollectionView" }, { "title": "UINavigationController", "uri": "UINavigationController" }, { "title": "Screen Transition", "uri": "ScreenTransition" }, { "title": "Screem Transition - Segue", "uri": "ScreenTransitionSegue" }]

export default function AndroidDrawer() {
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
                    <ListItemText primary={"Coming soon"} className={styles.textColor} />
                </ListItem>
                {/* <List>
                {menu.map((item) => (
                    <ListItem key={item.title} >
                        <Link href={"/android/" + item.uri} color="inherit">
                            <ListItemText primary={item.title} />
                        </Link>
                    </ListItem>
                ))}
            </List> */}
            </div>
        </Drawer >
    )
}