import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  useMediaQuery,
} from "@mui/material";

const projects = [
  {
    title: "Portfolio 3D",
    description: "Un site portfolio interactif avec React et Three.js.",
    images: ["/textures/port.jpg", "/textures/port2.jpg"],
    github: "https://github.com/tonprofil/portfolio",
    demo: "https://tonsite.com/portfolio",
  },
  {
    title: "Application Mobile",
    description: "Une app Android connectée à une API MySQL.",
    images: ["/textures/images (2).jpeg", "/textures/téléchargement.jpeg"],
    github: "https://github.com/tonprofil/mobile-app",
    demo: "https://tonsite.com/mobile",
  },
  {
    title: "E-commerce VR",
    description: "Boutique en ligne immersive en réalité virtuelle.",
    images: ["/textures/accessoires_H.jpeg", "/textures/téléchargement (6).png"],
    github: "https://github.com/tonprofil/ecommerce-vr",
    demo: "https://tonsite.com/vr-shop",
  },
  {
    title: "Web SIG",
    description: "Application SIG avec PostGIS et Leaflet.",
    images: ["/textures/design.png", "/textures/téléchargement (7).png"],
    github: "https://github.com/tonprofil/web-sig",
    demo: "https://tonsite.com/websig",
  },
  {
    title: "Hotel Booking",
    description: "Système de réservation d’hôtel en temps réel.",
    images: ["/textures/image-restaurant.jpg", "/textures/image-plane.jpg"],
    github: "https://github.com/tonprofil/hotel-booking",
    demo: "https://tonsite.com/hotel",
  },
  {
    title: "Analyse Data",
    description: "Analyse de données interactives avec Python et React.",
    images: ["/textures/image-mockups.png", "/textures/image-currency.jpg"],
    github: "https://github.com/tonprofil/data-analysis",
    demo: "https://tonsite.com/data",
  },
];

function Projects({ darkMode }) {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndexes) => {
        const newIndexes = {};
        projects.forEach((_, i) => {
          newIndexes[i] = prevIndexes[i] === 1 ? 0 : 1;
        });
        return newIndexes;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      id="projets"
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        background: darkMode
          ? "linear-gradient(180deg, #0F0F0F, #2D1B69, #0F0F0F)"
          : "#f7f7fb",
        transition: "background-color 0.5s",
        overflowX: "hidden",
      }}
    >
      {/* Titre */}
      <Typography
        variant={isMobile ? "h4" : "h3"}
        fontWeight="bold"
        gutterBottom
        color={darkMode ? "#fff" : "text.primary"}
        sx={{ mb: 6, textAlign: "center" }}
      >
        MES PROJETS
      </Typography>

      {/* Grille des projets */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: isMobile ? "90%" : 300,
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: darkMode
                  ? "linear-gradient(180deg, #0F0F0F 0%, #1A0938 50%,#0F0F0F 100%)"
                  : "#fff",
                color: darkMode ? "#fff" : "#000",
                borderRadius: 3,
                boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 12px 24px rgba(0,0,0,0.3)",
                },
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={project.images[currentImageIndex[index] || 0]}
                alt={project.title}
                sx={{
                  height: "50%",
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />

              {/* Texte + boutons */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: darkMode ? "#ccc" : "#555",
                    fontSize: isMobile ? "0.7rem" : "0.8rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Button
                    variant="outlined"
                    href={project.github}
                    target="_blank"
                    size={isMobile ? "small" : "medium"}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="contained"
                    href={project.demo}
                    target="_blank"
                    size={isMobile ? "small" : "medium"}
                  >
                    Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
