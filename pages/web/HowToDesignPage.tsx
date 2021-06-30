import React from 'react'
import Image from 'next/image'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'

export default function HowToDesignPage() {
    const style = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph >How to design a page</Typography>
                <Typography className={style.textColor} paragraph >
                    We will learn how to design a page:<br />
                    Basically, the web developers designs the page by specifying the "style"<br /><br />
                    There are two ways to style a page.<br />
                    ・Define the list of the styles into a file and call it by {`"className={ }"`}<br />
                    ・Define the particular style using {`"style={{}}"`} on particular component<br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Define the list of the styles into a file
                </Typography>
                <Typography className={style.textColor}>
                    Create a file called "styles.tsx" to the place you want. I'll create it under /public/assets/styles (by creating folders)<br />
                    Then import the MUI library<br />
                    <input readOnly className={style.cmdInput} value={`import { makeStyles } from "@material-ui/core"`} /><br />
                    Define a object that has access to the styles (Minimum)<br />
                    <textarea readOnly className={style.editorStyle} value={`export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'black'
    }
}))`} style={{ height: calculateEditorHeight(6) }} /><br />
                    Add more styles<br />
                    <textarea readOnly className={style.editorStyle} value={`export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'black'
    },
    textColor: {
        color: 'black'
    }
}))`} style={{ height: calculateEditorHeight(9) }} /><br /><br />
                    Then call that object from a page<br />
                    <input readOnly className={style.cmdInput} value={"const styles = useStyles()"} /><br />
                    If the editor didn't automatically imported the style file, you have to manually import that as well<br />
                    <input readOnly className={style.cmdInput} value={`import { useStyles } from '../../public/assets/styles/styles'`} style={{ width: 430 }} /><br />
                    You can apply the style by calling this method on each component<br />
                    <input readOnly className={style.cmdInput} value={`className={styles.root}`} /><br /><br />
                    Then I edited Home() just showing bigger "Hello World"<br />
                    <textarea readOnly className={style.editorStyle} value={`export default function Home() {
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
}`} style={{ height: calculateEditorHeight(16) }} /><br />
                    If you've written the same code, editor should showing the error "Cannot find Typography"<br />
                    So you have to import it by<br />
                    <input readOnly className={style.cmdInput} value={`import { Typography } from '@material-ui/core'`} /><br />
                    Learn more about <a href="https://material-ui.com/components/typography/" target="_blank">Typography</a><br /><br />
                    You
                    If you write a code like above, aceess to the page and should be showing like this<br />
                </Typography>
                <Image src={"/assets/images/web/HelloWorld.png"} width={600} height={400} alt="" /><br /><br />
                <Typography className={style.textColor} paragraph>This is the way how to design a page. Learn more design techniques on Google, we won't describe it here</Typography>
                <Typography className={style.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={style.textColor}>
                    We will learn useState() on next session
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}