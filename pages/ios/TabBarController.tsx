import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import chooseTBC from '../../public/assets/images/apple/choose_tbc.jpg'
// import tbcCreated from '../../public/assets/images/apple/tbc_created.jpg'
// import tbcItemsConnected from '../../public/assets/images/apple/tbc_items_connected.jpg'
// import tbcItemConfigure from '../../public/assets/images/apple/tbc_item_configure.jpg'
// import tbcResult from '../../public/assets/images/apple/tbc_result.jpg'
// import tbcClass from '../../public/assets/images/apple/tbc_create_class.jpg'
// import tbcLink from '../../public/assets/images/apple/tbc_link_class.jpg'
// import tbcBadge from '../../public/assets/images/apple/tbc_badge.jpg'
import PageBase from '../PageBase'

export default function TabBarController() {
    const style = useStyles()

    function content() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph>
                    Tab Bar Controller
                </Typography>
                <Typography className={style.textColor} paragraph>
                    In this session, we gonna make something like this<br />
                    {/* <img src={tbcResult} width={"20%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Create Tab Bar Controller
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Open storyboard and add Tab Bar Controller<br />
                    {/* <img src={chooseTBC} width={"60%"} height={"40%"} alt="" /><br /> */}
                    When the Tab Bar Controller is added, it has 2 boards connected as default. Of course you can replace this.<br />
                    {/* <img src={tbcCreated} width={"60%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Connect the board to Tab Bar Controller
                </Typography>
                <Typography className={style.textColor} paragraph>
                    You should want to replace default board with your own boards. To do so, Control key + drug and drop from Tab Bar Controller to other board and choose "view controllers"<br />
                    I'll recommend to connect your boards with Navigation Controllers before connect to Tab Bar.<br />
                    {/* <img src={tbcItemsConnected} width={"60%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Configure the Tab Bar items
                </Typography>
                <Typography className={style.textColor} paragraph>
                    After you connected controllers, you can configure the labels of each items<br />
                    {/* <img src={tbcItemConfigure} width={"60%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Run the project
                </Typography>
                <Typography className={style.textColor} paragraph>
                    If you run the project, you should be able to see the screen something like this<br />
                    {/* <img src={tbcResult} width={"20%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Update Tab Bar programatically
                </Typography>
                <Typography className={style.textColor} paragraph>
                    If you want to update the Tab Bar automatically, you can create the class of TabBarController and link it with storyboard<br />
                    {/* <img src={tbcClass} width={"60%"} height={"40%"} alt="" /><br /> */}
                    {/* <img src={tbcLink} width={"60%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Write this inside viewDidLoad in the Tab Bar class you created.<br />
                    self.tabBar.items![0].badgeValue = "1"<br /><br />
                    This will work as<br />
                    {/* <img src={tbcBadge} width={"20%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} paragraph>
                    If you want to use the value from other class, the best way is to use RxSwift. But you need more knowledge and I won't describe it here.
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}