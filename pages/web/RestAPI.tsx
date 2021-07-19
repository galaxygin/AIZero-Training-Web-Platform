import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../public/assets/styles/styles.web'
import PageBase from '../PageBase'
import { ArrowDownwardRounded } from '@material-ui/icons'

export default function AppBar() {
    const styles = useStyles()

    function renderContent() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph >RestAPI</Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>What is RestAPI?</Typography>
                <Typography className={styles.textColor} paragraph>
                    Its a design of artchitecture, calling the APIs on the server side by sending a request to the server and wait for the response.
                </Typography>
                <Typography className={styles.textColor} variant="h4" paragraph>
                    Flow
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>Client {`>`} Request</Typography>
                <Typography className={styles.textColor} paragraph>
                    A client will send a request to the server(API)<br />
                    The request can contain the parameters and header<br />
                    The available operations are GET, POST, PATCH, PUT, DELETE, etc...<br /><br />
                    Major client:<br />
                    ・App: Smartphone<br />
                    ・Browser: Smartphone, PC<br />
                    ・Software: Like Postman<br /><br />
                    Example:<br />
                    Send a GET Request to "getMembers()" function to  get the list of the members
                </Typography>
                <ArrowDownwardRounded style={{ color: 'white', width: 100, height: 100 }} />
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Server side APIs {`>`} Response
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    The server(s) is hosted (like a website) on the internet.<br />
                    The server URL is called as "EndPoint"<br />
                    It works on contacting with other servers (Such as database, storage, auth) and perform tasks based on the requested functions that should be processed on the server instead of the client side (for security reasons) and returns the result to the client, mostly on "json" format.<br /><br />
                    Existing services and frameworks:<br />
                    ・Firebase<br />
                    ・Supabase<br />
                    ・RestAPI framework(like FastAPI, Flask, Drogon)<br /><br />
                    Example:<br />
                    The server will return the list of the members as a json response when the server receives request of "getMembers()".
                </Typography>
                <ArrowDownwardRounded style={{ color: 'white', width: 100, height: 100 }} />
                <Typography className={styles.textColor} variant="h5" paragraph>Result {`>`} Client</Typography>
                <Typography className={styles.textColor} paragraph>
                    The client will receive the response from the server. *Unless the network is unstable<br />
                    The app will do something with the response<br /><br />
                    Example:<br />
                    The client will now able to show the list of members from result(Response)
                </Typography>
            </div>
        )
    }

    return <PageBase content={renderContent()} selectedPlatform="web" />
}