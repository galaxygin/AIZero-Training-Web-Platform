import React from 'react'
import { useStyles } from '../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'
import templateImg from '../../public/assets/images/apple/Project_template.jpg'
import setupImg from '../../public/assets/images/apple/Project_info_setup.jpg'
import configImg from '../../public/assets/images/apple/Project_config.jpg'
import vcImg from '../../public/assets/images/apple/Project_vc.jpg'
import storyboardImg from '../../public/assets/images/apple/Project_storyboard.jpg'

export default function IOSCreateProject() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                Create a new project
            </Typography>
            <Typography paragraph>
                Now, open the Xcode. To create a new project, go to File - New - Project.<br />
                Then you will see something like this
            </Typography>
            <Typography>On Xcode 12. Choose App ※Choose the first one if the design is different</Typography>
            <img src={templateImg} width={"60%"} height={"40%"} alt="" />
            <Typography>Project info setup. Input something like this</Typography>
            <img src={setupImg} width={"60%"} height={"40%"} alt="" />
            <Typography paragraph>Project Name: Name of the App</Typography>
            <Typography paragraph>Team: Developing Team</Typography>
            <Typography paragraph>Organization Identifier: Organization Name</Typography>
            <Typography paragraph>Interface: Choose Storyboard</Typography>
            <Typography paragraph>Life Cycle: Choose UIKit App Delegate</Typography>
            <Typography paragraph>Language: Swift</Typography>
            <Typography>If the project is created, the screen something like this will show up.<br />
            This screen is showing the configuration of the app and it's saved on file with .xcodeproj<br />
                <img src={configImg} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography>To start developing the screen, open ViewController<br />
                <img src={vcImg} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography paragraph>To edit the design and layout of the screen, open Main.storyboard<br />
                <img src={storyboardImg} width={"60%"} height={"40%"} alt="" />
            </Typography>
            <Typography variant="h4" paragraph>Next step</Typography>
            <Typography>Learn Swift variables</Typography>
        </main>
    )
}