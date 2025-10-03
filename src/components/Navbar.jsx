import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar position="fixed" color="default" elevation={2} sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Button color="inherit" href="#home" sx={{ fontWeight: "bold", textTransform: "none" }}>
            Accueil
          </Button>
          <Button color="inherit" href="#about" sx={{ fontWeight: "bold", textTransform: "none" }}>
            A propos
          </Button>
          <Button color="inherit" href="#projets" sx={{ fontWeight: "bold", textTransform: "none" }}>
            Projets
          </Button>
          <Button color="inherit" href="#contact" sx={{ fontWeight: "bold", textTransform: "none" }}>
            Contact
          </Button>

          <Button
            onClick={() => setDarkMode(!darkMode)}
            variant="text"
            sx={{
              border: "none",
              position: "fixed",
              right: 16,
              color: "#FFD700",
              "&:focus": { outline: "none" },
            }}
          >
            {darkMode ? "🌞" : "🌙"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
