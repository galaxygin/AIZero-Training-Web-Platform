import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
import initial from '../../public/assets/images/apple/screen_transition_initial.jpg'
import setId from '../../public/assets/images/apple/set_storyboard_id.jpg'
import nc_from from '../../public/assets/images/apple/nc_transition_from.jpg'
import nc_to from '../../public/assets/images/apple/nc_transition_to.jpg'
import Page from '../page'

export default function IOSScreenTransition() {
    const style = useStyles()

    function content() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph>
                    Screen Transition
                </Typography>
                <Typography className={style.textColor} paragraph>
                    In this session, we will learn how to go to other screen using NavigationController.<br />
                    <img src={nc_from} width={"20%"} height={"40%"} alt="" />
                    <img src={nc_to} width={"20%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Prepare following the environment:<br />
                    ・Prepare NavigationController on storyboard and set it as initial ViewController<br />
                    ・Prepare ViewController on storyboard, put Button and connect it to class using IBAction<br />
                    ・Change the NavigationController's rootViewController to the ViewController you prepared
                    <img src={initial} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Set Storyboard ID
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Go to storyboard and set ID of the board you want to go<br />
                    <img src={setId} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Go to other screen
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Write the following code inside the IBAction. Make sure to replace with your own names.<br />
                    let view = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "TableViewSample") as! TableViewSample<br />
                    self.navigationController?.pushViewController(view, animated: true)
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Go to other screen with passing argument(s)
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Define the variable(s) in the class you are going to. Something like this<br />
                    var argument: String?<br />
                    or<br />
                    var argument = ""<br /><br />
                    Then assign the value to instance created from Storyboard.<br />
                    let view = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "TableViewSample") as! TableViewSample ※as! cast is required when you want to pass the parameter to the particular class<br />
                    view.argument = "argument"<br />
                    self.navigationController?.pushViewController(view, animated: true)
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Go back to previous screen
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Write the following code.<br />
                    self.navigationController?.popViewController(animated: true)<br />
                </Typography>
            </div>
        )
    }

    return <Page content={content()} />
}