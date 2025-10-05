import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";

function Navbar({ darkMode, setDarkMode }) {

 {/* const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  };
const menuItems = ["Accueil", "A propos", "Projets", "Contact"];*/}

  return (
    <AppBar position="fixed" color="default" elevation={2} sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar sx={{ justifyContent: {sx: "left", md: "center" } }}>
        <Box sx={{ display: "flex", gap: { sx: 2, md: 4 } }}>
          <Button color="inherit" href="#home" sx={{ fontWeight: "bold", textTransform: "none", fontSize: { xs: "11px", md: "11px" } }}>
            Accueil
          </Button>
          <Button color="inherit" href="#about" sx={{ fontWeight: "bold", textTransform: "none", fontSize: { xs: "11px", md: "11px" }  }}>
            A propos
          </Button>
          <Button color="inherit" href="#projets" sx={{ fontWeight: "bold", textTransform: "none", fontSize: { xs: "11px", md: "11px" } }}>
            Projets
          </Button>
          <Button color="inherit" href="#contact" sx={{ fontWeight: "bold", textTransform: "none", fontSize: { xs: "11px", md: "11px" } }}>
            Contact
          </Button>

          {/*  <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}><Menu/></IconButton>
  <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}></Drawer>*/}
            

          <Button
            onClick={() => setDarkMode(!darkMode)}
            variant="text"
            sx={{
              border: "none",
              position: "fixed",
              right: { xs: 5, md: 16 },
              color: "#FFD700",
              "&:focus": { outline: "none" },
            }}
          >
            {darkMode ? <DarkMode sx={{color: "black", fontSize: 16}} /> : <LightMode sx={{color: "black", fontSize: 16}}/>}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
