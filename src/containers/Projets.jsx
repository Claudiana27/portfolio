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
  Chip,
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
import front from "../assets/front.png";
import journal from "../assets/journal.png";
import scanner from "../assets/scanner.png";

const projects = [
  {
    title: "Portfolio Diana",
    description: {
      fr: "Portfolio interactif présentant mes projets, mes compétences et mon parcours en tant que développeuse web, développé avec React, intégrant des animations 3D, une interface responsive et une section de contact entièrement fonctionnelle.",
      en: "Interactive portfolio showcasing my projects, skills, and journey as a web developer. Built with React, including 3D animations, a responsive UI, and a fully functional contact section.",
    },
    images: [accueil, mobile1, mobile2, pc, competence],
    github: "https://github.com/Claudiana27/portfolio",
    demo: "https://diana27-portfolio.vercel.app/",
    stack: ["React", "MUI", "Framer Motion", "Three.js"],
    deployment: "Frontend: Vercel | Versioning: GitHub",
  },
  {
    title: {
      fr: "Application pour la gestion des poubelles dans la ville de Fianarantsoa",
      en: "Waste-bin management application for the city of Fianarantsoa",
    },
    description: {
      fr: "Application complète destinée à améliorer la gestion des déchets dans la ville de Fianarantsoa. Elle comprend une application mobile pour les citoyens, développée avec React Native, permettant de signaler les poubelles pleines ou endommagées avec géolocalisation. Une interface web pour les agents municipaux, réalisée avec React, offre un tableau de bord interactif pour consulter les alertes et suivre les interventions. Le backend est construit avec Node.js / Express avec API REST sécurisée.",
      en: "A full solution designed to improve waste management in Fianarantsoa. It includes a React Native mobile app for citizens to report full or damaged bins with geolocation. A React web dashboard helps municipal agents monitor alerts and interventions. The backend is built with Node.js / Express and a secure REST API.",
    },
    images: [PC1, form, diagramme, carte, signal],
    github: "https://github.com/Claudiana27/gestion-poubelles",
    demo: "https://www.youtube.com/embed/a8MxSz4mvcg?si=_ZVj2YE-isXW9pQH",
    stack: ["React", "React Native", "Node.js", "Express", "MySQL"],
    deployment: "Backend/DB: Render, Railway | Mobile: EAS (Expo)",
  },
  {
    title: {
      fr: "Scanner de port TCP ouvert",
      en: "Open TCP Port Scanner",
    },
    description: {
      fr: "Ce projet est un scanner de ports TCP inspiré de Nmap en version simplifiée. L’application scanne une adresse IP pour détecter uniquement les ports TCP ouverts. Le backend Flask réalise un scan multi-thread rapide et envoie les résultats en continu via SSE. Le frontend React + Material UI permet de suivre le scan en direct.",
      en: "This project is a simplified Nmap-inspired TCP port scanner. It scans an IP/host to detect open TCP ports only. The Flask backend performs fast multi-threaded scans and streams live results with SSE. The React + Material UI frontend displays scan progress in real time.",
    },
    images: [front, journal, scanner],
    github: "https://github.com/Claudiana27/Scanner-port-TCP",
    demo: "https://scanner-port-tcp.vercel.app/",
    stack: ["React", "Flask", "SSE", "Material UI"],
    deployment: "Frontend: Vercel | Versioning: GitHub",
  },
];

export default function Projects({ darkMode = false, lang = "fr" }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(() =>
    projects.map(() => 0)
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const controls = useAnimation();
  const scrollRef = useRef(null);

  const t = {
    fr: {
      title: "PROJETS",
      stack: "Stack technique",
      deploy: "Déploiement",
      watchVideo: "Voir la vidéo",
      code: "Code",
      demo: "Démo",
      trashDemoTitle: "App Gestion des Poubelles",
    },
    en: {
      title: "PROJECTS",
      stack: "Tech stack",
      deploy: "Deployment",
      watchVideo: "Watch video",
      code: "Code",
      demo: "Demo",
      trashDemoTitle: "Waste Management App",
    },
  }[lang];

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

  const projectTitle = (project) =>
    typeof project.title === "string" ? project.title : project.title?.[lang] || project.title?.fr;

  const projectDescription = (project) =>
    project.description?.[lang] || project.description?.fr || "";

  return (
    <Container
      id="projets"
      maxWidth={false}
      disableGutters
      sx={{
        width: { xs: "86.5vw", md: "90%" },
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
        {t.title}
      </Typography>

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
                key={`${projectTitle(project)}-${idx}`}
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
                  alt={projectTitle(project) || ""}
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
                  {projectTitle(project) || ""}
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>

      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={true}
            onClose={() => setSelectedProject(null)}
            maxWidth="sm"
            fullWidth
            key={projectTitle(selectedProject)}
          >
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {projectTitle(selectedProject) || ""}
              <IconButton onClick={() => setSelectedProject(null)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <motion.div
                key={projectTitle(selectedProject)}
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
                      alt={projectTitle(selectedProject) || ""}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1.5,
                      textAlign: "left",
                      color: "text.primary",
                      lineHeight: 1.6,
                    }}
                  >
                    {projectDescription(selectedProject)}
                  </Typography>

                  {!!selectedProject?.stack?.length && (
                    <Box sx={{ mb: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ mb: 1, textAlign: "left", color: "text.secondary" }}
                      >
                        {t.stack}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {selectedProject.stack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: darkMode
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(15,23,42,0.08)",
                              color: darkMode ? "#f5f5f5" : "#1f2937",
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {selectedProject?.deployment && (
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "left", color: "text.secondary", fontStyle: "italic" }}
                    >
                      {t.deploy}: <span translate="no">{selectedProject.deployment}</span>
                    </Typography>
                  )}

                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {selectedProject?.images?.map((img, i) => (
                      <Box
                        key={i}
                        sx={{ width: 80, height: 60, borderRadius: 1, overflow: "hidden" }}
                      >
                        <img
                          src={img || ""}
                          alt={`${projectTitle(selectedProject) || ""}-${i}`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    ))}
                  </Box>

                  {selectedProject?.demo?.includes("youtube.com/embed") && (
                    <Button
                      startIcon={<PlayCircleOutlineIcon />}
                      onClick={() => setVideoOpen(true)}
                      sx={{ mt: 2 }}
                    >
                      {t.watchVideo}
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
              >
                {t.code}
              </Button>
              <Button
                startIcon={<PlayCircleOutlineIcon />}
                href={selectedProject?.demo || "#"}
                target="_blank"
                disabled={!selectedProject?.demo}
              >
                {t.demo}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>

      <Dialog open={videoOpen} onClose={() => setVideoOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {t.trashDemoTitle}
          <IconButton
            onClick={() => setVideoOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ position: "relative", pt: "56.25%" }}>
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
