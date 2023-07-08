import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LiquorIcon from "@mui/icons-material/Liquor";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "src/store";

const pages = ["home", "favorites"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { favorites } = useSelector((state: RootStore) => state.favorite);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{ backgroundColor: "#8b26b2" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Cocktail
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/home" className="text-white">
              <IconButton size="large" aria-label="Go to home" color="inherit">
                <Typography color="white">Home </Typography>
              </IconButton>
            </Link>
            <Link to="/favorites" className="text-white">
              <IconButton size="large" aria-label="Go to home" color="inherit">
                <Badge badgeContent={favorites.length} color="error">
                  <Typography color="white">Favorites </Typography>
                </Badge>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <LiquorIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              Cocktail
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
