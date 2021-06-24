import React from 'react'
import { useStyles } from '.../../public/assets/styles/styles'
import { Typography } from '@material-ui/core'

export default function AppIndex() {
    const style = useStyles()
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
            <Typography variant="h3" paragraph>
                Aizero Training
            </Typography>
            <Typography paragraph>
                For training the people who's willing to be a developer.
            </Typography>
            <Typography paragraph>
                We are currently partly covering<br />
                ・iOS
            </Typography>
            <Typography paragraph>
                The platforms planed to be covered in the future:<br />
                ・Android<br />
                ・SwiftUI
            </Typography>
            <Typography paragraph>
                ※We may limit the access to the paid subscribers or developers of Aizero in the future.
            </Typography>
        </main>
    )
}