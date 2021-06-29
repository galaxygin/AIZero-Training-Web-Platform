import React from 'react'
import { useStyles } from '../../public/assets/styles/styles.web'
import { Typography } from '@material-ui/core'
// import chooseCV from '../../public/assets/images/apple/choose_cv.jpg'
// import cvLinked from '../../public/assets/images/apple/cv_linked.jpg'
// import createFile from '../../public/assets/images/apple/Project_create_file.jpg'
// import cvCell from '../../public/assets/images/apple/cvcell.jpg'
// import cvCellCreated from '../../public/assets/images/apple/cvcell_created.jpg'
// import cvCellView from '../../public/assets/images/apple/cvcell_setup_view.jpg'
// import cvCellSetConstraints from '../../public/assets/images/apple/cvcell_set_constraints.jpg'
// import importImage from '../../public/assets/images/apple/import_image.jpg'
// import cvCellConstraints from '../../public/assets/images/apple/cvcell_constraints.jpg'
// import cvCellIdentifier from '../../public/assets/images/apple/cvcell_identifier.jpg'
// import cvCellLinked from '../../public/assets/images/apple/cvcell_view_linked.jpg'
// import cvExtension from '../../public/assets/images/apple/cv_extension.jpg'
// import cvResult from '../../public/assets/images/apple/cv_result.jpg'
// import cvHorizontal from '../../public/assets/images/apple/cv_horizontal_config.jpg'
import PageBase from '../PageBase'

export default function UICollectionView() {
    const style = useStyles()

    function content() {
        return (
            <div>
                <Typography className={style.textColor} variant="h3" paragraph>
                    UICollectionView
                </Typography>
                <Typography className={style.textColor} paragraph>
                    UICollection is the grid view and it's implementatuon method is very similar to TableView.<br />
                    We will make something like this<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cv_result.jpg"} width={"20%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Create layout and link to the class
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Creating a class named CollectionViewSample<br />
                    ※If you don't know how to do it, see the previous sessions.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/choose_cv.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cv_linked.jpg"} width={"60%"} height={"40%"} alt="" />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Create a UICollectionViewCell class
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Cell class is used as a layout for collection items.<br />
                    To create a cell class, right click the file navigator or create file from File menu.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/Project_create_file.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Enter the class name, choose UICollectionViewCell as subclass and check Also create XIB file<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cvcell.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Open the both class file and XIB file<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cvcell_created.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Design the layout of the cell and link the view to the cell
                </Typography>
                <Typography className={style.textColor} paragraph>
                    The way to design the layout of the cell is almost same as Storyboard.<br />
                    But when the Collection Cell is created, it don't have the basic "View". So let's add "View" with constraints<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cvcell_setup_view.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    I placed "ImageView" and "Label" on Cell and adding constraints. You can design your original layout if you want, but don't forget to set constraints to the view.<br />
                    We will adjust the size of the cell later by programatically, thus the layout won't be rendered as expected if the AutoLayout isn't set.<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cvcell_set_constraints.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    If you want to import images, this is the way to do so. Assets.xcassets<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/import_image.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Cell constraints are done<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cvcell_constraints.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Don't forget to set identifier for cell<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cvcell_identifier.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Link the view and define the function to change it's property<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cvcell_view_linked.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    Now, the cell is ready
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Setup the CollectionView
                </Typography>
                <Typography className={style.textColor} paragraph>
                    UICollection requires some setups after linking<br />
                    ・delegate: Implementing callbacks for the list actions<br />
                    ・dataSource: Returning the values to setup how the list looks like<br />
                    ・register: Registering the Cell class made with NIB. ※There are other way to do this, but I prefer this way<br />
                </Typography>
                <Typography className={style.textColor} paragraph>
                    Now, define this under collectionView<br />
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
                    <img src={"https://training.aizero.com.au/assets/images/apple/cv_extension.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                    You should be able to understand what each functions are doing by each name and arguments.<br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Do something when the list item is selected
                </Typography>
                <Typography className={style.textColor} paragraph>
                    To do something when the item is selected, write the code inside didSelectRowAt in UICollectionViewDelegateFlowLayout<br /><br />
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
                    The CollectionView is almost done, but we didn't add the data to show. So let's add it.<br />
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
                    <img src={"https://training.aizero.com.au/assets/images/apple/cv_result.jpg"} width={"20%"} height={"40%"} alt="" /><br />
                </Typography>
                <Typography className={style.textColor} variant="h5" paragraph>
                    Horizontal collection
                </Typography>
                <Typography className={style.textColor} paragraph>
                    To configure the collection as horizontal, set scroll direction to "Horizontal"<br />
                    <img src={"https://training.aizero.com.au/assets/images/apple/cv_horizontal_config.jpg"} width={"60%"} height={"40%"} alt="" /><br />
                </Typography>
            </div>
        )
    }

    return <PageBase content={content()} />
}