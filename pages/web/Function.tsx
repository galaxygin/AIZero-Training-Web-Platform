import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'
import Image from 'next/image'

export default function UseFunction() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >function()</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will learn more usage of the function():<br />
                    Currently we are using it to show a page. However we can use function inside function to handle event<br />
                    *Such as when a button is pressed, something has been entered<br /><br />
                    In this session, we'll create a function with input, button and text, displaying what is entered<br />
                    See this code<br />
                    <textarea readOnly className={styles.editorStyle} value={`export default function Home() {
  const styles = useStyles()
  const [text, setText] = useState("input something")
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  function buttonPress() {
    alert(text)
  }

  return (
    <div className={styles.root} style={{ height: height }}>
      <div>
        <Typography className={styles.textColor} variant="h3">
          {text}
        </Typography><br />
        <TextField style={{ backgroundColor: "white" }} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setText(e.target.value)} />
        <Button style={{ backgroundColor: "red", marginLeft: 16 }} onClick={buttonPress}>Click</Button>
      </div>
    </div>
  )
}`} style={{ height: calculateEditorHeight(25) }} wrap="off" /><br />
                    This should show like this when you accessed to the page
                </Typography>
                <Image src={"/assets/images/web/function.png"} width={600} height={400} alt="" /> <br /><br />
                <Typography className={styles.textColor} paragraph>
                    Now, let's look at the code (Not explaining everything)<br />
                    Setting height value from window<br />
                    <textarea readOnly className={styles.editorStyle} value={`useEffect(() => {
    setHeight(window.innerHeight)
}, [])`} style={{ height: calculateEditorHeight(3) }} /><br />
                    Defining the handling event function for button. Just showing the alert.<br />
                    <textarea readOnly className={styles.editorStyle} value={`function buttonPress() {
    alert(text)
}`} style={{ height: calculateEditorHeight(3) }} /><br />
                    Layout<br />
                    Make sure you imported all modules.<br />
                    The variable can be rendered by "{`{variable}`}"<br />
                    Listen to the event by listeners like "onChange" and "onClick"<br />
                    <textarea readOnly className={styles.editorStyle} value={`<div className={styles.root} style={{ height: height }}>
    <div>
        <Typography className={styles.textColor} variant="h3">
            {text}
        </Typography><br />
        <TextField style={{ backgroundColor: "white" }} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setText(e.target.value)} />
        <Button style={{ backgroundColor: "red", marginLeft: 16 }} onClick={buttonPress}>Click</Button>
    </div>
</div>`} style={{ height: calculateEditorHeight(9) }} /><br /><br />
                    If you can understand until here, you could be able to understand most of non-difficult codes
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn the routing(linking) of the pages on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}