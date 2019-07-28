import { createStyles, makeStyles } from "@material-ui/core/styles";


export const classes = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

export const slideshow = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};



const useStyles = makeStyles(createStyles({
    root: {
        margin: 0,
        padding: 0,
        fontFamily: "Quicksand, sans-serif",
        color: "#fff",
    },
    // width
    screenW: {
        width: "100vw",
    },
    fullW: {
        width: "100%",
    },
    // height
    screenH: {
        height: "100vh",
    },
    fullH: {
        height: "100%",
    },
    height70: {
        height: "70px",
    },
    /*====== BG COLOR ======*/
    Gray: {
        backgroundColor: "#333",
    },
    white: {
        backgroundColor: "#fff",
    },
    white50: {
        backgroundColor: "#fffff80",
    },
    black50: {
        backgroundColor: "#0000080"
    },
    /*====== FONT ======*/
    fSize2: {
        fontSize: "2rem",
    },
    /*====== IMAGE ======*/
    imgCover: {
        objectFit: "cover",
    },
    /*====== OVERFLOW ======*/
    overflowH: {
        overflow: "hidden",
    },
    transition1l: {
        transition: "left 1s ease-in-out",
    },
    /*====== POSITION ======*/
    abs: {
        position: "absolute",
    },
    rel: {
        position: "relative",
    },
    left0: {
        left: "0px",
    },
    left100vw: {
        left: "100vw",
    },
    leftM100vw: {
        left: "-100vw",
    },
    bot0: {
        bottom: 0,
    },
    /*====== FLEX ======*/
    df: {
        display: "flex",
    },
    row: {
        display: "flex",
        flexDirection: "row",
    },
    col: {
        display: "flex",
        flexDirection: "column",
    },
    fCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    flex1: {
        flex: 1,
    },
    flex8: {
        flex: 8,
    },
    /*====== CUSTOM ======*/
    dot: {
        width: "10px",
        height: "10px",
        borderRadius: " 5px",
        transition: "background-color 1s ease-in-out",
    }

}));