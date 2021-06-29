import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import initial from '../../public/assets/images/apple/transition_mode_initial.jpg'
import PageBase from '../PageBase'

export default function IOSScreenTransitionMode() {
    const style = useStyles()

    function content() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph>
                    Screen Transition Mode
                </Typography>
                <Typography className={style.textColor} paragraph>
                    iOS has some styles of screen transition.
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Show
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Adding a screen as stack of the connected NavigationController.<br />
                    The most used way for screen transaction.<br />
                    Equilvant to navigate of Android Jetpack Navigation<br /><br />
                    {`//`}Show a view<br />
                    self.navigationController?.show(view, sender: self)<br />
                    {`//`}Go back to previous screen<br />
                    self.navigationController.popViewController()<br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Present
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Presenting a screen as new stack. The presented view controller doesn't have any relation with the origin.<br /><br />
                    {`//`}Present a view<br />
                    self.present(view, animated: true, completion: nil)<br />
                    {`//`}To close the presented view, you have to call<br />
                    self.dismiss()<br /><br />
                    ※If the presented view controller is not connected with NavigationController, the "Show" won't work properly.<br />
                    ※The pop methods doesn't work on the root of the presented screen.
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Show Detail
                </Typography>
                <Typography className={style.textColor} paragraph>
                    This mode is used for particular view, such as SplitView. It's easier if you imagine the Setting app op the app. That's made with SplitView, show the list of columns on the left and showing detail screen on the right.
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Prepare the environment
                </Typography>
                <Typography className={style.textColor} paragraph>
                    You don't have to do this, but preparing environment helps you better understanding<br />
                    ・Prepare a View controller linked with NavigationController<br />
                    ・Make a way to access to the NavigationController or set it as initial view controller<br />
                    ・Put 3 buttons for "Show", "Present", "Show Detail"<br />
                    ・Create one more View Controller for destination<br />
                    ・Put 2 buttons for "Go back", "Dismiss"<br />
                    ・Control + drug {`&`} drop from 3 buttons to destination and connect each buttons.<br />
                    ・You can create class to do those actions programmatically<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/transition_mode_initial.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}