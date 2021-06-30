import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import tfInitial from '../../public/assets/images/apple/tf_initial.jpg'
// import tfConfigure from '../../public/assets/images/apple/tf_configure.jpg'
// import tfResult from '../../public/assets/images/apple/tf_result.jpg'
import PageBase from '../PageBase'

export default function UITextField() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph>
                    UITextField
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    In this session you will make something like this<br />
                    ※You won't see the top and bottom part if you are not accessing through Navigation and Tab Bar.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/tf_result.jpg"} width={"20%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    First prepare the environment something like this<br />
                    ・Prepare a Storyboard and put "Label" and "TextField" ※You need to set constraints if you want to design exactly the same<br />
                    ・Make it as initial view controller or make it accessable from your initial view controller<br />
                    ・Prepare a UIViewController class for that board and link the view with class<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/tf_initial.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Get text
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    textField.text
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Set text
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    textField.text = "text"
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Update the label when the user input something to textfield
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Define the following function<br />
                    {`@objc func textDidChange(textField: UITextField) {`}<br />
                    label.text = textField.text<br />
                    {`}`}
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Then link the function to the textField inside viewDidLoad()<br />
                    {`textField.addTarget(self, action: #selector(textDidChange(textField:)), for: .editingChanged)`}
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Configure the TextField
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    You can configure the properties for the content<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/tf_configure.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}