import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
// import chooseNC from '../../public/assets/images/apple/choose_nc.jpg'
// import ncAdded from '../../public/assets/images/apple/nc_added.jpg'
// import ncChangeDefault from '../../public/assets/images/apple/nc_change_default.jpg'

export default function UINavigationController() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                UINavigationController
            </Typography>
            <Typography paragraph>
                UINavigationController works for managing views(screens) connected with controller.
            </Typography>
            <Typography paragraph>
                We use this for screen transitions like<br />
                ・Navigate to other screen<br />
                ・Go back to previous screen<br />
                ・Go back to root screen<br />
            </Typography>
            <Typography variant="h5" paragraph>
                Create UINavigationController
            </Typography>
            <Typography paragraph>
                To create a UINavigationController, open storyboard and add NavigationController<br />
                <img src={'../../public/assets/images/apple/choose_nc.jpg'} width={"60%"} height={"40%"} alt="" /><br />
                When the UINavigationController is created, it has a UITableViewController as default view controller called as "root view controller"<br />
                <img src={'../../public/assets/images/apple/nc_added.jpg'} width={"60%"} height={"40%"} alt="" /><br />
                Of course you can change the default view controller by drug and drop from NavigationController and choose "root view controller"<br />
                <img src={'../../public/assets/images/apple/nc_change_default.jpg'} width={"60%"} height={"40%"} alt="" /><br />
            </Typography>
        </main>
    )
}