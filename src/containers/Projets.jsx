import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

const projects = [{ title: "Portfolio 3D", description: "Un site portfolio interactif avec React et Three.js.", images: ["/textures/port.jpg", "/textures/port2.jpg"], github: "https://github.com/tonprofil/portfolio", demo: "https://tonsite.com/portfolio", },
  { title: "Application Mobile", description: "Une app Android connectée à une API MySQL.", images: ["/textures/images (2).jpeg", "/textures/téléchargement.jpeg"], github: "https://github.com/tonprofil/mobile-app", demo: "https://tonsite.com/mobile", },
  { title: "E-commerce VR", description: "Boutique en ligne immersive en réalité virtuelle.", images: ["/textures/accessoires_H.jpeg", "/textures/téléchargement (6).png"], github: "https://github.com/tonprofil/ecommerce-vr", demo: "https://tonsite.com/vr-shop", },
  { title: "Web SIG", description: "Application SIG avec PostGIS et Leaflet.", images: ["/textures/design.png", "/textures/téléchargement (7).png"], github: "https://github.com/tonprofil/web-sig", demo: "https://tonsite.com/websig", },
  { title: "Hotel Booking", description: "Système de réservation d’hôtel en temps réel.", images: ["/textures/image-restaurant.jpg", "/textures/image-plane.jpg"], github: "https://github.com/tonprofil/hotel-booking", demo: "https://tonsite.com/hotel", },
  { title: "Analyse Data", description: "Analyse de données interactives avec Python et React.", images: ["/textures/image-mockups.png", "/textures/image-currency.jpg"], github: "https://github.com/tonprofil/data-analysis", demo: "https://tonsite.com/data", },];

export default function Projects({ darkMode = false }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(() =>
    projects.map(() => 0)
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const controls = useAnimation();
  const scrollRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev.map((val, i) => (val + 1) % projects[i].images.length)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!mounted || !scrollRef.current) return;

    const animateScroll = async () => {
      const scrollWidth = scrollRef.current.scrollWidth / 3;
      if (!scrollWidth) return;

      await controls.start({
        x: [0, -scrollWidth],
        transition: {
          duration: isMobile ? 55 : 40,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    if (!paused) animateScroll();
    else controls.stop();

    return () => controls.stop();
  }, [mounted, paused, controls, isMobile]);

  return (
    <Container
      id="projets"
      maxWidth={false}
      disableGutters
      sx={{
        width: { xs: "82.5vw", md: "90%" },
        px: { xs: 0, sm: 3, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 6, md: 10 },
        background: darkMode
          ? "linear-gradient(180deg, #0F0F0F 0%, #2D1B69 50%, #0F0F0F 100%)"
          : "#f7f7fb",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h3"}
        fontWeight="bold"
        gutterBottom
        color={darkMode ? "#fff" : "text.primary"}
        sx={{ textAlign: "center", fontSize: { md: 36 }, mt: {xs: 4} }}
      >
        PROJETS MES
      </Typography>

      {/* Bande défilante */}
      <Box
        sx={{
          width: "100%",
          height: isMobile ? 160 : 220,
          overflow: "hidden",
          px: {xs: 2},
          py: { xs: 2, md: 4 },
          mt: 5,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          ref={scrollRef}
          component={motion.div}
          animate={controls}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          sx={{
            display: "flex",
            gap: isMobile ? "1rem" : "1.5rem",
            alignItems: "center",
            width: "fit-content",
          }}
        >
          {[...projects, ...projects, ...projects].map((project, idx) => {
            const originalIndex = idx % projects.length;
            const imgIndex = currentImageIndex[originalIndex] || 0;

            return (
              <Card
                key={`${project.title}-${idx}`}
                sx={{
                  width: isMobile ? 140 : 220,
                  height: isMobile ? 140 : 200,
                  flexShrink: 0,
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 4,
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
                  },
                }}
                onClick={() => setSelectedProject(project)}
              >
                <CardMedia
                  component="img"
                  image={project.images?.[imgIndex] || ""}
                  alt={project.title || ""}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    bgcolor: "rgba(0,0,0,0.55)",
                    color: "white",
                    textAlign: "center",
                    py: 0.5,
                    fontSize: isMobile ? "0.7rem" : "0.9rem",
                  }}
                >
                  {project.title || ""}
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>

      {/* Modal projet avec AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={true}
            onClose={() => setSelectedProject(null)}
            maxWidth="sm"
            fullWidth
            key={selectedProject.title} // clé unique
          >
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {selectedProject?.title || ""}
              <IconButton onClick={() => setSelectedProject(null)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 120,
                      overflow: "hidden",
                      borderRadius: 2,
                    }}
                  >
                    <img
                      src={selectedProject?.images?.[0] || ""}
                      alt={selectedProject?.title || ""}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>

                  <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
                    {selectedProject?.description || ""}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {selectedProject?.images?.map((img, i) => (
                      <Box key={i} sx={{ width: 80, height: 60, borderRadius: 1, overflow: "hidden" }}>
                        <img
                          src={img || ""}
                          alt={`${selectedProject?.title || ""}-${i}`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </DialogContent>

            <DialogActions>
              <Button
                startIcon={<GitHubIcon />}
                href={selectedProject?.github || "#"}
                target="_blank"
                disabled={!selectedProject?.github}
              >
                
              </Button>
              <Button
                startIcon={<PlayCircleOutlineIcon />}
                href={selectedProject?.demo || "#"}
                target="_blank"
                disabled={!selectedProject?.demo}
              >
                
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </Container>
  );
}
