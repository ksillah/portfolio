import React from 'react';

import { makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import desktop from '../../assests/images/desktop.jpg';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    Divider,
} from '@material-ui/core';
const drawerWidth = 240;



const useStyles = makeStyles( (theme:Theme) =>
createStyles({
    
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#78909c',//bluegrey
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
    row:{
        display:'flex'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      card_root:{
        marginTop: '80px',
        paddingBottom:'10px',
        margin: 'auto',
        width:'40%',
        height:'40%',
        backgroundColor:'#78909c',
        color: 'white',
      },
      card2_root:{
        padding: '10px',
        margin: 'auto',
        width:'40%',
        height:'40%'
      },
      root:{
        padding: '0',
        margin: '0'
    },
    github_button:{
        borderColor:'white',
        borderStyle:'solid',
        borderWidth: '2px',
        margin:'auto', 
        color:'white',
        marginLeft:'5px'
    },
    
}));


    



interface Props{
    title: string;
}

export const Projects = ( props:Props) => {
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
            <div className={classes.row}>
            <Card className={classes.card_root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Flask
                    </Typography>
                    <Typography variant="h5" component="h2">
                    An application that allows a user to sign up, log in and create a rating for shows they have viewed.
                    </Typography>
                </CardContent>
                <CardActions>
                    <a style={{textDecoration:'none'}} href="https://tv-inventory.herokuapp.com/">
                    <   Button className={classes.github_button} size="large">TV Inventory App on Heroku</Button>
                    </a>
                </CardActions>
            </Card>
            <Card className={classes.card_root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    React
                    </Typography>
                    <Typography variant="h5" component="h2">
                    An application that allows a user to sign up, log in, create and view ratings for shows they have viewed. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <a style={{textDecoration:'none'}} href="https://tv-rating-inventory.web.app/">
                    <   Button className={classes.github_button} size="large">TV Inventory App on Firebase</Button>
                    </a>
                </CardActions>
            </Card>
            </div>
            <div className={classes.row}>
            <Card className={classes.card_root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                LinkedIn
                </Typography>
                
            </CardContent>
            <CardActions>
                <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/kutah-sillah/">
                <   Button className={classes.github_button} size="large">Let's Connect on LinkedIn</Button>
                </a>
            </CardActions>
    </Card>
    <Card className={classes.card_root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                GitHub
                </Typography>
                
            </CardContent>
            <CardActions  >
                <a style={{textDecoration:'none'}}  href="https://github.com/ksillah">
                <   Button className={classes.github_button} size="large">View All My Public Projects Here!</Button>
                </a>
            </CardActions>
    </Card>
            </div>
           
        </main>
    </div>
)
}