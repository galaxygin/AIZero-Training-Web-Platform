import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import initial from '../../public/assets/images/apple/segue_initial.jpg'
// import createSegue from '../../public/assets/images/apple/create_segue.jpg'
// import segue_identifier from '../../public/assets/images/apple/segue_identifier.jpg'
// import commented from '../../public/assets/images/apple/commented_navigation.jpg'
// import segue_prepare from '../../public/assets/images/apple/segue_prepare.jpg'
import PageBase from '../PageBase'

export default function ScreenTransitionSegue() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph>
                    Screen Transition - Segue
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    In this session you will learn how to go to screen using Segue
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    I made this environment. Prepare following the environment if you aren't ready:<br />
                    ・Prepare NavigationController on storyboard and set it as initial ViewController<br />
                    ・Prepare ViewController on storyboard, put Button<br />
                    ・Change the NavigationController's rootViewController to the ViewController you prepared
                    <img src={"https://training.aizero.com.au/assets/images/apple/segue_initial.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Create a Segue
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Creating a Segue is very easy. Drug and drop with pressing Control from the Button to another board. Then select "show".<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/create_segue.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    If you choose this way, you don't have to link the Button to the class.
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Create a Segue with passing arguments
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    If you want to pass the value to Segue, you should to set identifier to segue first.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/segue_identifier.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Now, back to the class file. If your class has commented function like this, uncomment it. If it doesn't, define it.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/commented_navigation.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Write the following inside prepare()<br />
                    let view = segue.destination as! TableViewSample ※Replace with your class name<br />
                    view.argument = "argument"
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    If you have created more than 2 segues, you should identify the segue by if clause like this<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/segue_prepare.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}