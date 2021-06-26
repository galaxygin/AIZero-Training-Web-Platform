import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
import templateImg from '../../public/assets/images/apple/Project_template.jpg'
import setupImg from '../../public/assets/images/apple/Project_info_setup.jpg'
import configImg from '../../public/assets/images/apple/Project_config.jpg'
import vcImg from '../../public/assets/images/apple/Project_vc.jpg'
import storyboardImg from '../../public/assets/images/apple/Project_storyboard.jpg'
import Page from '../page'

export default function IOSCreateProject() {
    const style = useStyles()

    function content() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph>
                    Create a new project
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Now, open the Xcode. To create a new project, go to File - New - Project.<br />
                    Then you will see something like this
                </Typography>
                <Typography className={style.textColor}>On Xcode 12. Choose App ※Choose the first one if the design is different</Typography>
                <img src={templateImg} width={"60%"} height={"40%"} alt="" />
                <Typography className={style.textColor}>Project info setup. Input something like this</Typography>
                <img src={setupImg} width={"60%"} height={"40%"} alt="" />
                <Typography className={style.textColor} paragraph>Project Name: Name of the App</Typography>
                <Typography className={style.textColor} paragraph>Team: Developing Team</Typography>
                <Typography className={style.textColor} paragraph>Organization Identifier: Organization Name</Typography>
                <Typography className={style.textColor} paragraph>Interface: Choose Storyboard</Typography>
                <Typography className={style.textColor} paragraph>Life Cycle: Choose UIKit App Delegate</Typography>
                <Typography className={style.textColor} paragraph>Language: Swift</Typography>
                <Typography className={style.textColor}>If the project is created, the screen something like this will show up.<br />
                    This screen is showing the configuration of the app and it's saved on file with .xcodeproj<br />
                    <img src={configImg} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={style.textColor}>To start developing the screen, open ViewController<br />
                    <img src={vcImg} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={style.textColor} paragraph>To edit the design and layout of the screen, open Main.storyboard<br />
                    <img src={storyboardImg} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={style.textColor} variant="h4" paragraph>Next step</Typography>
                <Typography className={style.textColor}>Learn Swift variables</Typography>
            </div>
        )
    }

    return <Page content={content()} />
}