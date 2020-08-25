import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Button, InputBase} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import cx from 'classnames'
import SearchIcon from '@material-ui/icons/Search';
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
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
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '19ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  

function NavBar(props) {
    const classes = useStyles();
    const [term, setTerm] = useState("")
    const [event, setEvent] = useState(false)

    const changehandler = (event) => {
        setTerm(event.target.value)
        setEvent(event)
    }

    return (
        <AppBar position="static" className={styles.bar}>
            <Toolbar >
                <Typography variant="h6" className={styles.txt}>LyricFinder</Typography>
                <Link to='/' className={styles.btnLink}>
                    <Button color="inherit" >Home</Button>
                </Link>
                <div className={ cx(classes.search, styles.search)}>
                    <div className={classes.searchIcon}>
                         <SearchIcon />
                    </div>
                    <form onSubmit = {() =>{ 
                      props.submitHandler(term, event)
                      setTerm('')
                      }}> 
                        <InputBase
                        autoFocus={true}
                        placeholder="Search a Track...."
                        className = {styles.width}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        type='text'
                        value = {term}
                        onChange={changehandler}
                        />
                    </form>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
