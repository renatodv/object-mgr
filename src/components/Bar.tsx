import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

/**
 * This component renders the header bar and its menu so the user can navigate trough the application.
 * The menu gets displayed if the user clicks on the menu icon.
 */
const Bar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            data-testid="menu-icon-buton"
            onClick={(e) => handleClick(e)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            data-testid="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/">
              Get Object
            </MenuItem>
            <MenuItem component={Link} to="/create-object">
              Create Object
            </MenuItem>
            <MenuItem component={Link} to="/free-object">
              Free Object
            </MenuItem>
          </Menu>
          <Typography variant="h6">Object Manager</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;
