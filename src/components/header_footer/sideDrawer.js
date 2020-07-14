import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
//icons
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const styles = {
    paper : {
        width: '25%',
    }
}

const SideDrawer = (props) => {
    const { classes } = props;
    return (
        <Drawer
            anchor="right"
            classes={{paper:classes.paper}}
            open={props.open}
            onClose={props.onClose}
        >
           <List component="nav">
                <ListItem button onClick={()=>console.log('Featured')}>
                    <ListItemIcon>
                        <EventOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Event starts in" />
                </ListItem>

                <ListItem button onClick={()=>console.log('Featured')}>
                    <ListItemIcon>
                        <ContactSupportOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Info" />
                </ListItem>

                <ListItem button onClick={()=>console.log('Featured')}>
                    <ListItemIcon>
                        <HighlightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Highlights" />
                </ListItem>

                <ListItem button onClick={()=>console.log('Featured')}>
                    <ListItemIcon>
                        <LocalOfferOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pricing" />
                </ListItem>

                <ListItem button onClick={()=>console.log('Featured')}>
                    <ListItemIcon>
                        <LocationOnOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Location" />
                </ListItem>

           </List>

        </Drawer>
    );
};

export default withStyles(styles)(SideDrawer);