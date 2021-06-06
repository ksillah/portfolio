import React from 'react';
import { makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import desktop from '../../assests/images/desktop.jpg';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
} from '@material-ui/core';
const drawerWidth = 240;



const useStyles = makeStyles( (theme:Theme) =>
createStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#78909c',
        Color:'#c1d5e0'
        
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'white'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex',
        align: 'center',
        margin: 'auto'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'white',
        
    },
    main: {
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${desktop});`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    my_name:{
        textAlign: 'center',
        position: 'relative',
        top: '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontFamily: 'Arsenal, monospace',
        letterSpacing:'10px',
        fontSize: '22px'
    },
    about_me:{
        textAlign: 'center',
        position: 'relative',
        width: '60%',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontFamily: 'Arsenal, monospace',
        letterSpacing:'2px',
        wordSpacing: '2px',
        fontSize: '12px'
    },
    
}));


    



interface Props{
    title: string;
}

export const Home = ( props:Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        {/*New and Updated HTML Code */}
        <nav>
            <div className={classes.navbar_container}>
                <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                    <li>
                        <a href="/" className={classes.nav_a}>Home</a>
                    </li>
                    <li>
                        <a href="/projects" className={classes.nav_a}>My Projects</a>
                    </li>
                    <li>
                        <a href="/contactkutah" className={classes.nav_a}>Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
        <main className={classes.main}>
            <div className={classes.my_name}>
                <h1>KUTAH SILLAH</h1>
            </div>
            <div className={classes.about_me}>
            <h1>Hello! My name is Kutah and I am a Chicago-based software developer with a passion for education.
                I'm seeking a role that will allow me to use my experieince as a special education teacher to help 
                make education accessible to all learners. I have experince using HTML, CSS, Python, SQL, Flask, Javascript and React.
            </h1>
        
            </div>
        </main>
    </div>
)
}