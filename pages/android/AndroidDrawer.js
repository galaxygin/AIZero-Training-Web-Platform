import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { List, ListItem, Link, ListItemText, Drawer, Divider } from '@material-ui/core'

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
            <div className={styles.toolbar} >
                <ListItem>
                    <ListItemText primary={"Android ©️ Aizero 2020"} />
                </ListItem>
            </div>
            <Divider />
            <ListItem>
                <ListItemText primary={"Coming soon"} />
            </ListItem>
            {/* <List>
                {menu.map((item) => (
                    <ListItem key={item.title} >
                        <Link href={"/ios/" + item.uri} color="inherit">
                            <ListItemText primary={item.title} />
                        </Link>
                    </ListItem>
                ))}
            </List> */}
        </Drawer >
    )
}