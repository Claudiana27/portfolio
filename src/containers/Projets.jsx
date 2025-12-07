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
import accueil from "../assets/accueil.jpg";
import mobile1 from "../assets/mobile-port.jpg";
import mobile2 from "../assets/mobile-port1.jpg";
import pc from "../assets/Accueil-PC.png";
import competence from "../assets/Compétence.png";
import carte from "../assets/carte.jpg";
import signal from "../assets/signal.jpg";
import diagramme from "../assets/diagramme.png";
import form from "../assets/formulaire.png";
import PC1 from "../assets/PC.png";

const projects = [
  {
    title: "Portfolio Diana",
    description:
      "Portfolio interactif présentant mes projets, mes compétences et mon parcours en tant que développeuse web,développé avec React, intégrant des animations 3D, une interface responsive et une section de contact entièrement fonctionnelle.",
    images: [accueil, mobile1, mobile2, pc, competence],
    github: "https://github.com/Claudiana27/portfolio",
    demo: "https://diana27-portfolio.vercel.app/",
  },
  {
    title: "Application pour la gestion des poubelles dans la ville de Fianarantsoa",
    description:
      "Application complète destinée à améliorer la gestion des déchets dans la ville de Fianarantsoa.Elle comprend une application mobile pour les citoyens, développée avec React Native, permettant de signaler les poubelles pleines ou endommagées avec géolocalisation.Une interface Web pour les agents municipaux, réalisée avec React, offre un tableau de bord interactif pour consulter les alertes, suivre les interventions et visualiser les points de collecte sur carte.Le backend est construit avec Node.js / Express, exposant une API REST sécurisée qui gère les signalements, les utilisateurs et les statuts d’intervention.Les données sont stockées dans une base MySQL structurée pour assurer rapidité, fiabilité et traçabilité.Ce projet a pour objectif de faciliter la communication entre les citoyens et les services de voirie, d’optimiser la collecte des déchets et d’améliorer la propreté urbaine grâce à une solution moderne et intuitive",
    images: [PC1, form, diagramme,carte, signal],
    github: "https://github.com/Claudiana27/portfolio",
    demo: "https://www.youtube.com/embed/a8MxSz4mvcg?si=_ZVj2YE-isXW9pQH",
  },
];

export default function Projects({ darkMode = false }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(() =>
    projects.map(() => 0)
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false); // <- Modal vidéo
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
        width: { xs: "81vw", md: "90%" },
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
        textAlign="center"
        fontWeight="bold"
        gutterBottom
        color={darkMode ? "#fff" : "text.primary"}
        sx={{ textAlign: "center", fontSize: { md: 37 }, mt: { xs: 4 } }}
      >
        PROJETS
      </Typography>

      {/* Bande défilante */}
      <Box
        sx={{
          width: "100%",
          height: isMobile ? 160 : 220,
          overflow: "hidden",
          px: { xs: 2 },
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

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, textAlign: "center" }}
                  >
                    {selectedProject?.description || ""}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {selectedProject?.images?.map((img, i) => (
                      <Box
                        key={i}
                        sx={{ width: 80, height: 60, borderRadius: 1, overflow: "hidden" }}
                      >
                        <img
                          src={img || ""}
                          alt={`${selectedProject?.title || ""}-${i}`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* Bouton pour ouvrir le modal vidéo */}
                  {selectedProject.title.includes("poubelles") && (
                    <Button
                      startIcon={<PlayCircleOutlineIcon />}
                      onClick={() => setVideoOpen(true)}
                      sx={{ mt: 2 }}
                    >
                      Voir la vidéo
                    </Button>
                  )}
                </Box>
              </motion.div>
            </DialogContent>

            <DialogActions>
              <Button
                startIcon={<GitHubIcon />}
                href={selectedProject?.github || "#"}
                target="_blank"
                disabled={!selectedProject?.github}
              ></Button>
              <Button
                startIcon={<PlayCircleOutlineIcon />}
                href={selectedProject?.demo || "#"}
                target="_blank"
                disabled={!selectedProject?.demo}
              ></Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Modal pour vidéo */}
      <Dialog
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Démo Application Gestion des Poubelles
          <IconButton
            onClick={() => setVideoOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ position: "relative", pt: "56.25%" /* 16:9 ratio */ }}>
            <iframe
              src="https://www.youtube.com/embed/a8MxSz4mvcg?si=_ZVj2YE-isXW9pQH"
              title="Demo Gestion des Poubelles"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
