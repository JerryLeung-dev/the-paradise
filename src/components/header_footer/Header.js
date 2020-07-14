import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './sideDrawer';
import './Header-Footer.css';


class Header extends Component {
    state= {
        drawerOpen: false,
        headerShow: false
    }
    

    toggleDrawer = (value) => {
        this.setState({drawerOpen: value})
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillMount() {
        window.removeEventListener('scroll',this.handleScroll);      
    }

    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({headerShow:true})
            console.log('scrolling');
        } else {
            this.setState({headerShow: false})
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#e02769cf': 'transparent',
                    boxShadow: 'none',
                    padding: '10px',
                    transition: 'all 300ms ease-in'
                }}
            >
                <ToolBar>
                    <div className="header_logo">
                        <div className="font_caveat header_logo_paradise">The Paradise</div>
                        <div className="header_logo_title">Color Powder Parties</div>
                    </div>

                    <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=>this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={() => this.toggleDrawer(false)}
                    />
                </ToolBar>

                
            </AppBar>
        );
    }
}

export default Header;