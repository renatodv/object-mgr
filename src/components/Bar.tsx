import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    color: "black",
    textDecoration: "none",
  },
  active: {
    fontWeight: "bold",
  },
});

/**
 * This component renders the header bar and its menu so the user can navigate trough the application.
 * The menu gets displayed if the user clicks on the menu icon.
 */
const Bar = () => {
  const [isDrawerOpen, setDrawer] = React.useState<boolean>(false);
  const toggleDrawer = () => {
    setDrawer(!isDrawerOpen);
  };
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            data-testid="menu-icon-buton"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={"left"} open={isDrawerOpen} onClose={toggleDrawer}>
            <List>
              <ListItem>
                <Typography variant="h6">Menu</Typography>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/"
                  className={classes.link}
                  activeClassName={classes.active}
                  exact
                  onClick={toggleDrawer}
                >
                  Get Object
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/create-object"
                  className={classes.link}
                  activeClassName={classes.active}
                  onClick={toggleDrawer}
                >
                  Create Object
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/free-object"
                  className={classes.link}
                  activeClassName={classes.active}
                  onClick={toggleDrawer}
                >
                  Free Object
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
          <Typography variant="h6">Object Manager</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;
