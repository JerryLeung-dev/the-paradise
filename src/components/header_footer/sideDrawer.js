import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { ListItemText, ListItemIcon, ListItem } from "@material-ui/core";
//icons
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import HighlightOutlinedIcon from "@material-ui/icons/HighlightOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
//scroller
import { scroller } from "react-scroll";

const styles = {
  paper: {
    width: "25%",
  },
};

const SideDrawer = (props) => {
  const { classes } = props;
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
    props.onClose();
  };
  
  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.paper }}
      open={props.open}
      onClose={props.onClose}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement('featured')}>
          <ListItemIcon>
            <EventOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Event starts in" />
        </ListItem>

        <ListItem button onClick={() => scrollToElement('info')}>
          <ListItemIcon>
            <ContactSupportOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>

        <ListItem button onClick={() => scrollToElement('highlights')}>
          <ListItemIcon>
            <HighlightOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Highlights" />
        </ListItem>

        <ListItem button onClick={() => scrollToElement('pricing')}>
          <ListItemIcon>
            <LocalOfferOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Pricing" />
        </ListItem>

        <ListItem button onClick={() => scrollToElement('location')}>
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
