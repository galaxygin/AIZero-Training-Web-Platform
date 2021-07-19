import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'

export default function Grid() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >Grid</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will learn how to use Grid layout with an Image and label:<br />
                    Its structure is almost same as List<br />
                    First, import these components
                </Typography>
                <input className={styles.cmdInput} readOnly value={"import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'"} />
                <Typography className={styles.textColor}>
                    Create or fetch the "List" object. *Not the component<br />
                    Something like this
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`const founders = [{ "name": "Miguel", "role": "CEO", "img": "", "uri":"" },
{ "name": "Ginga", "role": "CTO", "img": "", "uri": "" }]`} style={{ height: calculateEditorHeight(2) }} />
                <Typography className={styles.textColor}>
                    Use it like this inside return ()
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`<ImageList>
    {founders.map((item) =>
        <ImageListItem key={item.name}>
            <img src={item.img} alt={item.name} />
            <ImageListItemBar title={item.name} subtitle={item.role} className={styles.textColor} />
        </ImageListItem>
    )}
</ImageList>`} style={{ height: calculateEditorHeight(8) }} />
                <Typography className={styles.textColor} variant="h4" style={{ marginTop: 30 }}>
                    Link the iten with the pages
                </Typography>
                <Typography className={styles.textColor}>
                    Import "Link" component
                </Typography>
                <input className={styles.cmdInput} readOnly value={`import { Link } from '@material-ui/core'`} />
                <Typography className={styles.textColor}>
                    Put the Link component inside ImageListItem
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`<ImageListItem key={item.title}>
    <Link href={"/" + item.uri} color="inherit">
        <img src={item.img} alt={item.name} />
        <ImageListItemBar title={item.name} subtitle={item.role} className={styles.textColor} />
    </Link>
</ImageListItem>`} style={{ height: calculateEditorHeight(6) }} />
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn about App Bar
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}