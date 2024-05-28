import '../index.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Navbar = () => {
    return (

        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className='navbar'>
                <Toolbar variant="dense" className='navbar'>
                    <Link className="navbar-brand" to="/"><img src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" alt="logo-nasa" /></Link>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link className="navbar-brand" to="/">Inicio</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
