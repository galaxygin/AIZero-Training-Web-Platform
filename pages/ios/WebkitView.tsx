import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import chooseWebKit from '../../public/assets/images/apple/choose_webkit.jpg'
// import choose_bar_button_item from '../../public/assets/images/apple/choose_bar_button_item.jpg'
// import navTop from '../../public/assets/images/apple/place_item_nav_right.jpg'
// import wvLinked from '../../public/assets/images/apple/wv_linked.jpg'
// import wvResult from '../../public/assets/images/apple/wv_result.jpg'
import PageBase from '../PageBase'

export default function WebkitView() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3" paragraph>
                    Web View (Webkit View)
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    In this session, you will learn how to develop a simple browser view using WebKit View<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/wv_result.jpg"} width={"20%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Setup views
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Open Storyboard and prepare a View Controller (With Navigation Controller is recommended)<br />
                    Then choose WebKit View<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/choose_webkit.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Then add some Bar Button Item(s) to give some functionality to the webview<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/choose_bar_button_item.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Place it on the right of the Navigation Bar (Top bar) ※You have to add NavigationBar first if you haven't connected NavigationController<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/place_item_nav_right.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Put 2 more items on the bottom bar and link views to the class<br />
                    ※If using NavigationController: open config and check shows Toolbar<br />
                    ※Otherwise: Add Toolbar manually to the bottom<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/wv_linked.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    When you linked the WebKit View to the class, don't forget to add "import WebKit" to the top<br />
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Open website
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    There are some steps to open website with WebKit View, but you can write in one line with this<br />
                    webView.load(URLRequest(url: URL(string: "https://itake.aizero.com.au")!))
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Reload page
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    webView.reload()
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Go back
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    You should check if the view can go back before going back<br />
                    {`if webView.canGoBack {`}<br />
                    webView.goBack()<br />
                    {`}`}
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Forward
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Almost same as going back<br />
                    {`if webView.canGoForward {`}<br />
                    webView.goForward()<br />
                    {`}`}
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Open the URL given from other view
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    You can define this under webView<br />
                    var url: String?
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Then create a logic like this<br />
                    {`if url == nil {`}<br />
                    webView.load(URLRequest(url: URL(string: "https://itake.aizero.com.au")!))<br />
                    {`} else {`}<br />
                    webView.load(URLRequest(url: URL(string: url!)!))<br />
                    {`}`}
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Open this view from other view by given url
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    I'll recommend to open WebView by presenting mode.<br /><br />
                    {`//Create instance of the view. You need to set identifier to NavigationController`}<br />
                    let view = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "WebNavigation")<br />
                    {`//To pass url`}<br />
                    ((view as! UINavigationController).topViewController as! WebView).url = "https://itake.aizero.com.au"<br />
                    {`//Set this to present as Full screen`}<br />
                    view.modalPresentationStyle = .fullScreen<br />
                    {`//Present screen`}<br />
                    self.present(view, animated: true, completion: nil)
                </Typography>
                <Typography className={styles.textColor} variant="h5" paragraph>
                    Run the project
                </Typography>
                <Typography className={styles.textColor} paragraph>
                    Now should be able to see the screen like this (If you added X button)<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/wv_result.jpg"} width={"20%"} height={"40%"} alt="" /><br />
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}