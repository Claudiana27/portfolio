import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { DarkMode, LightMode, Menu, Language, Computer } from "@mui/icons-material";

const NAV_ITEMS = {
  fr: [
    { label: "Accueil", href: "#home" },
    { label: "A propos", href: "#about" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ],
};

function Navbar({ darkMode, setDarkMode, lang, setLang }) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = NAV_ITEMS[lang] || NAV_ITEMS.fr;

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={2}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.78)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(17, 24, 39, 0.10)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: isMobile ? "space-between" : "center",
          px: { xs: 1.5, md: 3 },
          position: "relative",
        }}
      >
        {isMobile ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.7,
                px: 1.2,
                py: 0.4,
                borderRadius: 2,
                background: "linear-gradient(45deg, rgba(106,13,173,0.14), rgba(30,144,255,0.14), rgba(255,64,129,0.14))",
                border: "1px solid rgba(17,24,39,0.10)",
              }}
            >
              <Computer sx={{ fontSize: 16, color: "#111827" }} />
              <Box
                component="span"
                sx={{
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: 0.4,
                  color: "#111827",
                }}
              >
                Diana
              </Box>
            </Box>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <Menu />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 260, pt: 1 }} role="presentation">
                <List>
                  {navItems.map((item) => (
                    <ListItemButton
                      key={item.href}
                      component="a"
                      href={item.href}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  ))}
                </List>

                <Box sx={{ px: 2, py: 1, display: "flex", gap: 3 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Language />}
                    onClick={toggleLang}
                    sx={{ textTransform: "none" }}
                  >
                    {lang === "fr" ? "EN" : "FR"}
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => setDarkMode(!darkMode)}
                    sx={{ minWidth: 0 }}
                  >
                    {darkMode ? <DarkMode /> : <LightMode />}
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  color="inherit"
                  href={item.href}
                  sx={{ fontWeight: "bold", textTransform: "none", fontSize: 13 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                position: "absolute",
                right: 24,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Button
                onClick={toggleLang}
                variant="text"
                startIcon={<Language sx={{ fontSize: 18 }} />}
                sx={{
                  textTransform: "none",
                  color: "#111827",
                  fontWeight: 700,
                  minWidth: 60,
                }}
              >
                {lang === "fr" ? "EN" : "FR"}
              </Button>
              <Button
                onClick={() => setDarkMode(!darkMode)}
                variant="text"
                sx={{
                  minWidth: 42,
                  color: "#111827",
                  "&:focus": { outline: "none" },
                }}
              >
                {darkMode ? <DarkMode sx={{ fontSize: 18 }} /> : <LightMode sx={{ fontSize: 18 }} />}
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
