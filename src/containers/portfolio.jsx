import React, { useRef, useEffect } from "react";
import { Container, Box, Typography, Button, Avatar, useMediaQuery, IconButton } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import pdp from "../assets/Pdp.png";

function Portfolio({ darkMode }) {
  const textRef = useRef();
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (textRef.current && textRef.current.material) {
      try {
        textRef.current.material.color.set(darkMode ? "#FFD700" : "#111111");
      } catch {}
    }
  }, [darkMode]);

  return (
    <Container
      id="home"
      maxWidth={false}
      sx={{
        width: { xs: "97%", md: "90%" },
        minHeight: { xs: "75vh", md: "100vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        pt: { xs: 4, md: 8 },
        px: { xs: 1, md: 6 },
        boxSizing: "border-box",
        background: darkMode ? "linear-gradient(180deg, #0F0F0F, #2D1B69, #0F0F0F)" : "#ffffff",
        transition: "background-color 0.5s",
        overflowX: "hidden",
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* Texte + Canvas */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 55%" },
          pr: { md: 4 },
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h1"
          color={darkMode ? "#cccccc" : "text.primary"}
          gutterBottom
          sx={{ fontWeight: "bold", mt: { xs: 4 }, fontSize: { xs: 35, md: 38 } }}
        >
          Salut, je suis
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: isMobile ? 250 : 300,
            height: isMobile ? 120 : 100,
            mt: { xs: -3 },
            ml: { xs: -11, md: -10 },
            mb: { xs: -2, md: 0 },
          }}
        >
          <Canvas
            camera={{
              position: [0, 0, isMobile ? 25 : 20],
              fov: 50,
            }}
            gl={{ alpha: true }}
            style={{ width: "100%", height: "100%", background: "transparent", align: "center" }}
          >
            <ambientLight intensity={darkMode ? 0.5 : 0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />

            <mesh>
              <boxGeometry args={[2.5, 1.5, 1]} />
              <meshStandardMaterial color="white" opacity={0.1} transparent />
            </mesh>

            <Text3D
              ref={textRef}
              key={darkMode ? "dark" : "light"}
              font="/fonts/helvetiker_regular.typeface.json"
              size={isMobile ? 4 : 4}
              height={isMobile ? 1.5 : 3}
              curveSegments={12}
            >
              Diana
              <meshPhysicalMaterial transparent opacity={0.9} metalness={0.5} roughness={0.3} />
            </Text3D>

            <OrbitControls enablePan enableZoom enableRotate />
          </Canvas>
        </Box>

        <Typography
          variant="body1"
          color={darkMode ? "#cccccc" : "text.secondary"}
          sx={{ mb: 3, textAlign: "center" }}
        >
          Je suis une développeuse passionnée par le web et la data.
          J&apos;adore créer des interfaces modernes, intuitives et optimisées. 
          La 3D : une passion que je transforme en expériences immersives.
        </Typography>

        {/* Section boutons + logos */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* LinkedIn à gauche */}
          <IconButton
            href="https://linkendin.com/in/claudiana-rajoma-07505731b" // <-- change le lien ici
            target="_blank"
            sx={{
               fontSize: 28, // taille réduite
               background: "linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
           }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>

          {/* Bouton télécharger CV */}
          <Button
            variant="contained"
            size="medium"
            href="/CV_Diana.pdf"
            download
            sx={{
              background: "linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)",
              borderRadius: "50px",
              px: 4,
              py: 1,
              fontSize: "0.7rem",
            }}
          >
            Télécharger mon CV ici
          </Button>

          {/* GitHub à droite */}
          <IconButton
            href="https://github.com/Claudiana27"
            target="_blank"
            sx={{
              fontSize: 28, // taille réduite
              background: "linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>

      {/* Avatar */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 35%" },
          display: "flex",
          justifyContent: "center",
          mt: { xs: 0, md: 0 },
        }}
      >
        <Avatar
          alt="portrait"
          src={pdp}
          sx={{
            width: isMobile ? 300 : 380,
            height: isMobile ? 300 : 380,
            border: "3px solid",
            borderColor: "primary.main",
            boxShadow: 5,
          }}
        />
      </Box>
    </Container>
  );
}

export default Portfolio;
