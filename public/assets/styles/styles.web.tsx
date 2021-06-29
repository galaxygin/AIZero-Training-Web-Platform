import { makeStyles, fade } from "@material-ui/core";

const drawerWidth = 240;

const darkTheme = "#454545"

export const defaultBackground = "black"

export const defaultTheme = '#454545'

export const defaultTextColor = 'white'

export const listBackground = '#454545'

export const headerColor = 'black'

export const headerTint = 'white'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'black'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: darkTheme,
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: darkTheme
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        width: "100%"
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        height: "100vh" + theme.mixins.toolbar,
    },
    textColor: {
        color: 'white'
    },
    cmdTextColor: {
        color: 'lime'
    },
    control: {
        padding: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    searchDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 16,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                // marginLeft: theme.spacing(3),
                width: 'auto',
            },
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    searchSpacer: {
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        paddingLeft: 16,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
    },
    cmdInput: {
        color: 'lime',
        backgroundColor: 'black',
        borderColor: 'silver',
        borderWidth: 1,
        fontSize: 16,
        minHeight: 30,
        minWidth: 300
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));