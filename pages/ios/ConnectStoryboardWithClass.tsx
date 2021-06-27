import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import setClass from '../../public/assets/images/apple/Project_storyboard_set_class.jpg'
// import addEditor from '../../public/assets/images/apple/Project_add_editor.jpg'
// import connectView from '../../public/assets/images/apple/Project_storyboard_connect_view.jpg'
// import viewConnected from '../../public/assets/images/apple/Project_storyboard_view_connected.jpg'
// import connectAction from '../../public/assets/images/apple/Project_storyboard_connect_action.jpg'
// import actionConnected from '../../public/assets/images/apple/Project_storyboard_action_connected.jpg'
import PageBase from '../PageBase'

export default function ConnectStoryboardWithClass() {
    const style = useStyles()

    function content() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph>
                    Connect Storyboard with class
                </Typography>
                <Typography className={style.textColor} variant="h5">Set class</Typography>
                <Typography className={style.textColor} paragraph>
                    Make sure the board is referencing the class you want to link to.<br />
                    {/* <img src={setClass} width={"60%"} height={"40%"} alt="" /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5">Add editor</Typography>
                <Typography className={style.textColor} paragraph>
                    {/* <img src={addEditor} width={"60%"} height={"40%"} alt="" /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5">Connect view</Typography>
                <Typography className={style.textColor} paragraph>
                    Select view and drug and drop to the top of the class with pressing Control key.
                    {/* <img src={connectView} width={"60%"} height={"40%"} alt="" /><br /> */}
                    {/* <img src={viewConnected} width={"60%"} height={"40%"} alt="" /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5">Connect view with action</Typography>
                <Typography className={style.textColor} paragraph>
                    You can connect a view supports IBAction can connect as IBAction. If the view is connected wkth IBAction, the action event of the view will be sent to the connected function.<br />
                    {/* <img src={connectAction} width={"60%"} height={"40%"} alt="" /><br /> */}
                    {/* <img src={actionConnected} width={"60%"} height={"40%"} alt="" /> */}
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}