import React from 'react';
import { makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import desktop from '../../assests/images/desktop.jpg';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useForm } from 'react-hook-form';

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
import { Height } from '@material-ui/icons';
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
    contact_div:{
        margin: 'auto',
        width: '50%',
    },
    contact_form:{
        margin:'auto', 
        color: 'white' ,
        padding: '200px'

    },
    inputColor:{
        backgroundColor:'#78909c',
        color:'white',
        width:'100%',
        height:'30px',
        
    },
    messageBox:{
        backgroundColor:'#78909c',
        color:'white',
        width:'100%',
        height:'80px',
    },
    sendButton:{
        width:'100%',

    }
    
}));


    



interface Props{
    title: string;
}


export const ContactMe = ( props:Props) => {
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
            <div className={classes.contact_div}>
                <form className={classes.contact_form}>
                    <div>
                        <label htmlFor="user_name">Full Name</label>
                        <input className={classes.inputColor} type='text' name='user_name'  />
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="user_email">Email</label>
                        <input className={classes.inputColor} type='email' name='user_email'/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea className={classes.messageBox} name='message' />
                        <br/>
                        <br/>   
                        
                    </div>
                    <input className={classes.sendButton} type='submit' value='Send' />
                    
                    
        </form>

            </div>
        
            
        </main>
        </div>
)
}