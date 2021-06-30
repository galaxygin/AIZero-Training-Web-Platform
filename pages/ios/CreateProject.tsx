import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import templateImg from '../../public/assets/images/apple/Project_template.jpg'
// import setupImg from '../../public/assets/images/apple/Project_info_setup.jpg'
// import configImg from '../../public/assets/images/apple/Project_config.jpg'
// import vcImg from '../../public/assets/images/apple/Project_vc.jpg'
// import storyboardImg from '../../public/assets/images/apple/Project_storyboard.jpg'
import PageBase from '../PageBase'

export default function IOSCreateProject() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph>
                    Create a new project
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Now, open the Xcode. To create a new project, go to File - New - Project.<br />
                    Then you will see something like this
                </Typography>
                <Typography className={styles.textColor}>On Xcode 12. Choose App ※Choose the first one if the design is different<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_template.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Project info setup. Input something like this<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_info_setup.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Project Name: Name of the App<br />
                    Team: Developing Team<br />
                    Organization Identifier: Organization Name<br />
                    Interface: Choose Storyboard<br />
                    Life Cycle: Choose UIKit App Delegate<br />
                    Language: Swift<br /><br />
                    If the project is created, the screen something like this will show up.<br />
                    This screen is showing the configuration of the app and it's saved on file with .xcodeproj<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_config.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    To start developing the screen, open ViewController<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_vc.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    To edit the design and layout of the screen, open Main.storyboard<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_storyboard.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next step</Typography>
                <Typography className={styles.textColor}>Learn Swift variables</Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}