import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import Header from '../Header'
import { showCmdInput, showEditor } from '../../component/EditorManager'
import { showImage } from '../../component/ImageManager'

export default function HowToDesignPage() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >How to design a page</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will learn how to design a page:<br />
                    Basically, the web developers designs the page by specifying the "style"<br /><br />
                    There are two ways to style a page.<br />
                    ・Define the list of the styles into a file and call it by {`"className={ }"`}<br />
                    ・Define the particular style using {`"style={{}}"`} on particular component<br />
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Define the list of the styles into a file
                </Typography>
                <Typography className={styles.textColor}>
                    Create a file called "styles.tsx" to the place you want. I'll create it under /public/assets/styles (by creating folders)<br />
                    Then import the MUI library<br />
                    {showCmdInput(`import { makeStyles } from "@material-ui/core`)}<br />
                    Define a object that has access to the styles (Minimum)
                </Typography>
                {showEditor(`export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'black'
    }
}))`, 6, "styles.tsx")}<br />
                <Typography className={styles.textColor}>Add more styles</Typography>
                {showEditor(`export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'black'
    },
    textColor: {
        color: 'black'
    }
}))`, 9, "styles.tsx")}<br /><br />
                <Typography className={styles.textColor}>Then call that object from a page<br />
                    <input readOnly className={styles.cmdInput} value={"const styles = useStyles()"} /><br />
                    If the editor didn't automatically imported the style file, you have to manually import that as well<br />
                    <input readOnly className={styles.cmdInput} value={`import { useStyles } from '../../public/assets/styles/styles'`} /><br />
                    You can apply the style by calling this method on each component<br />
                    <input readOnly className={styles.cmdInput} value={`className={styles.root}`} /><br /><br />
                    Then I edited Home() just showing bigger "Hello World"
                </Typography>
                {showEditor(`export default function Home() {
  const styles = useStyles()

  return (
    <div className={styles.root}>
        <div>
            <Typography className={styles.textColor} variant="h3">
                Hello World by class style
            </Typography><br />
            <Typography style={{ color: 'red' }} variant="h3">
                Hello World by manual styling
            </Typography>
        </div>
    </div>
  )
}`, 16, "HelloWorld.tsx")}<br />
                <Typography className={styles.textColor}>
                    If you've written the same code, editor should showing the error "Cannot find Typography"<br />
                    So you have to import it by<br />
                    {showCmdInput(`import { Typography } from '@material-ui/core'`)}<br />
                    Learn more about <a href="https://material-ui.com/components/typography/" target="_blank">Typography</a><br /><br />
                    You
                    If you write a code like above, aceess to the page and should be showing like this<br />
                </Typography>
                {showImage("/assets/images/web/HelloWorld.png")}<br /><br />
                <Typography className={styles.textColor} paragraph>This is the way how to design a page. Learn more design techniques on Google, we won't describe it here</Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn useState() on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} header={<Header title="How to design a page - Web" url="https://training.aizero.com.au/web/HowToDesignPage" />} selectedPlatform="web" />
}