import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import addVc from '../../public/assets/images/apple/Project_add_vc.jpg'
// import addTv from '../../public/assets/images/apple/Project_add_tableview.jpg'
// import tvAdded from '../../public/assets/images/apple/Project_tv_added.jpg'
// import tvLinked from '../../public/assets/images/apple/Project_tv_linked.jpg'
// import createFile from '../../public/assets/images/apple/Project_create_file.jpg'
// import tvCell from '../../public/assets/images/apple/Project_create_tvcell.jpg'
// import tvCellReady from '../../public/assets/images/apple/Project_tvcell_created.jpg'
// import cvCellSetConstraints from '../../public/assets/images/apple/tvcell_set_constraints.jpg'
// import importImage from '../../public/assets/images/apple/import_image.jpg'
// import tvCellConstraints from '../../public/assets/images/apple/tvcell_constraints.jpg'
// import tvCellIdentifier from '../../public/assets/images/apple/tvcell_identifier.jpg'
// import tvExtension from '../../public/assets/images/apple/tv_extension.jpg'
// import tvResult from '../../public/assets/images/apple/tv_result.jpg'
import Page from '../page'

export default function UITableView() {
    const style = useStyles()

    function content() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph>
                    UITableView
                </Typography>
                <Typography className={style.textColor} paragraph>
                    UITableView is the list view for iOS and one of the most used views in UIKit.<br />
                    We will make something like this<br />
                    {/* <img src={tvResult} width={"20%"} height={"40%"} alt="" /><br /> */}
                    To create it, open storyboard and add ViewController if you don't have one<br />
                    {/* <img src={addVc} width={"60%"} height={"40%"} alt="" /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Create layout and link to the class
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Creating a class named TableViewSample<br />
                    ※If you don't know how to do it, see the previous sessions.<br />
                    {/* <img src={addTv} width={"60%"} height={"40%"} alt="" /><br /> */}
                    {/* <img src={tvAdded} width={"60%"} height={"40%"} alt="" /><br /> */}
                    {/* <img src={tvLinked} width={"60%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Create a UITableViewCell class
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Cell class is used as a layout for list items.<br />
                    To create a cell class, right click the file navigator or create file from File menu.<br />
                    {/* <img src={createFile} width={"60%"} height={"40%"} alt="" /><br /> */}
                    Enter the class name, choose UITableViewCell as subclass and check Also create XIB file<br />
                    {/* <img src={tvCell} width={"60%"} height={"40%"} alt="" /><br /> */}
                    Open the both class file and XIB file<br />
                    {/* <img src={tvCellReady} width={"60%"} height={"40%"} alt="" /><br /> */}
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Design the layout of the cell and link the view to the cell
                </Typography>
                <Typography className={style.textColor} paragraph>
                    The way to design the layout of the cell is almost same as Storyboard.<br />
                    I placed "ImageView" and "Label" on Cell and adding constraints. You can design your original layout if you want, but don't forget to set constraints to the view.<br />
                    We will adjust the size of the cell later by programatically, thus the layout won't be rendered as expected if the AutoLayout isn't set.<br />
                    {/* <img src={cvCellSetConstraints} width={"60%"} height={"40%"} alt="" /><br /> */}
                    If you want to import images, this is the way to do so. Assets.xcassets<br />
                    {/* <img src={importImage} width={"60%"} height={"40%"} alt="" /><br /> */}
                    Link the view and create function something like this to interact with other class<br />
                    {/* <img src={tvCellConstraints} width={"60%"} height={"40%"} alt="" /><br /> */}
                    Also don't forget to set identifier for cell<br />
                    {/* <img src={tvCellIdentifier} width={"60%"} height={"40%"} alt="" /><br /> */}
                    Now, the cell is ready
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Setup the TableView
                </Typography>
                <Typography className={style.textColor} paragraph>
                    UITableView requires some setups after linking<br />
                    ・delegate: Implementing callbacks for the list actions<br />
                    ・dataSource: Returning the values to setup how the list looks like<br />
                    ・register: Registering the Cell class made with NIB. ※There are other way to do this, but I prefer this way<br />
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Now, define this under tableView<br />
                    var items = [String]()
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Then define the following inside viewDidLoad().<br />
                    tableView.delegate = self ※This will show error at the moment<br />
                    tableView.dataSource = self ※This will show error at the moment<br />
                    tableView.register(UINib(nibName: "TableViewCell", bundle: nil), forCellReuseIdentifier: "cell")<br />
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Copy and paste the following to BELOW THE CLASS (Must be outside class)<br />
                    {/* <img src={tvExtension} width={"60%"} height={"40%"} alt="" /><br /> */}
                    You should be able to understand what each functions are doing by each name and arguments.<br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Do something when the list item is selected
                </Typography>
                <Typography className={style.textColor} paragraph>
                    To do something when the item is selected, write the code inside didSelectRowAt in UITableViewDelegate<br /><br />
                    To get the index of selected item<br />
                    let index = indexPath.row<br />
                    To get the item in the list by index<br />
                    items[indexPath.row]<br />
                    Print selected item on console<br />
                    print(items[indexPath.row])
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Set some the data
                </Typography>
                <Typography className={style.textColor} paragraph>
                    The TableView is almost done, but we didn't add the data to show. So let's add it.<br />
                    Add something like this to inside viewDidLoad()<br />
                    items.append("Aizero")<br />
                    items.append("iTake")<br />
                    items.append("Training")<br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Run the project
                </Typography>
                <Typography className={style.textColor} paragraph>
                    If you were following the exact instructions, you will be able to see this screen when you run the project<br />
                    {/* <img src={tvResult} width={"20%"} height={"40%"} alt="" /><br /> */}
                </Typography>
            </div>
        )
    }

    return <Page content={content()} />
}