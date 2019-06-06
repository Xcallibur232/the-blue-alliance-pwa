import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import PeopleIcon from "@material-ui/icons/People";
import StarIcon from "@material-ui/icons/Star";
import VideocamIcon from "@material-ui/icons/Videocam";

import { sideNavWidth } from "../../constants/Config";
import SideNavListItem from "./SideNavListItem";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: sideNavWidth,
    flexShrink: 0
  },
  drawerPaper: {
    zIndex: theme.zIndex.appBar - 1,
    width: sideNavWidth
  },
  drawerContent: {
    marginTop: 64,
    overflowY: "auto"
  }
}));

const SideNav = ({ router: { route } }) => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerContent}>
          <List>
            <SideNavListItem
              href="/"
              icon={HomeIcon}
              text="Home"
              active={route === "/"}
            />
            <SideNavListItem
              href="/events"
              icon={EventIcon}
              text="Events"
              active={route === "/events"}
            />
            <SideNavListItem
              href="/teams"
              icon={PeopleIcon}
              text="Teams"
              active={route === "/teams"}
            />
            <SideNavListItem
              href="/mytba"
              icon={StarIcon}
              text="myTBA"
              active={route === "/mytba"}
            />
            <SideNavListItem
              href="/gameday"
              icon={VideocamIcon}
              text="GameDay"
              active={route === "/gameday"}
            />
            <Divider />
          </List>
        </div>
      </Drawer>
    </>
  );
};

SideNav.propTypes = {
  router: PropTypes.object
};

export default withRouter(SideNav);