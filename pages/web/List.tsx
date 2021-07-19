import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { calculateEditorHeight } from '../../component/SizeManager'

export default function List() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >List</Typography>
                <Typography className={styles.textColor} paragraph >
                    We will learn how to use List:<br />
                    First, import these components
                </Typography>
                <input className={styles.cmdInput} readOnly value={"import { List, ListItem, ListItemText } from '@material-ui/core'"} />
                <Typography className={styles.textColor}>
                    Create or fetch the "List" object. *Not the component<br />
                    Something like this
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`const founders = [{ "name": "Miguel", "role": "CEO" },
{ "name": "Ginga", "role": "CTO" }]`} style={{ height: calculateEditorHeight(2) }} />
                <Typography className={styles.textColor}>
                    Use it like this inside return ()
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`<List>
    {founders.map((item) =>
        <ListItem key={item.name}>
            <ListItemText primary={item.name} className={styles.textColor} />
        </ListItem>
    )}
</List>`} style={{ height: calculateEditorHeight(7) }} />
                <Typography className={styles.textColor} variant="h4" style={{ marginTop: 30 }}>
                    Link the iten with the pages
                </Typography>
                <Typography className={styles.textColor}>
                    Import "Link" component
                </Typography>
                <input className={styles.cmdInput} readOnly value={`import { Link } from '@material-ui/core'`} />
                <Typography className={styles.textColor}>
                    Put the Link component inside ListItem
                </Typography>
                <textarea className={styles.editorStyle} readOnly value={`<ListItem key={item.title}>
    <Link href={"/" + item.uri} color="inherit">
        <ListItemText primary={item.title} className={styles.textColor} />
    </Link>
</ListItem>`} style={{ height: calculateEditorHeight(5) }} />
                <Typography className={styles.textColor} variant="h4" paragraph>Next</Typography>
                <Typography className={styles.textColor}>
                    We will learn the Grid layout
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}