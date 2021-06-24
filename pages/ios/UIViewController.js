import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
import vcImg from '../../public/assets/images/apple/Project_vc.jpg'

export default function UIViewController() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                UIViewController
            </Typography>
            <Typography paragraph>
                UIViewController is the most basic class to develop a screen of the app.<br />
                Actually the class ending with ViewController provides the functions and controls to work as a screen.<br />
                UIKit has some classed ending with ViewController such as
            </Typography>
            <Typography variant="h5">UITableViewController</Typography>
            <Typography paragraph>Used to develop a screen designated for list view</Typography>
            <Typography variant="h5">UICollectionViewController</Typography>
            <Typography paragraph>Used to develop a screen designated for grid view</Typography>
            <Typography paragraph>Also the classes ending with Controller has function to connect the ViewControllers.<br />
            You can learn this later.</Typography>
            <Typography paragraph>Ok,then let's learn UIViewController.<br />
            ※Note that the things we are going to do is just one of the way to develop. If you have enough knowledge and prefers another way, you don't have to follow this way.</Typography>
            <Typography paragraph>First, open the ViewController.swift. If you came across the first session, it's file should look like this<br />
                <img src={vcImg} width={"60%"} height={"40%"} alt="" /><br />
                The ViewController at this stage has only little bit of code after the project is created.<br />
                So, let's look in to it.
            </Typography>
            <Typography paragraph>import UIKit<br />
            Importing required library</Typography>
            <Typography paragraph>class ViewController: UIViewController<br />
            Creating the class called "ViewController" extending "UIViewController"</Typography>
            <Typography paragraph>override func viewDidLoad()<br />
            Called when the class is created. This is a function of lifecycle and commonly used to setup the stuffs here</Typography>
            <Typography paragraph>If you run the project now, it should show the blank screen. Because we haven't setting up anything.</Typography>
        </main>
    )
}