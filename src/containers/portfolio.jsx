import React, { useRef, useEffect } from "react";
import { Container, Box, Typography, Button, Avatar, useMediaQuery } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import pdp from "../assets/Pdp.png";
import "../App.css";

function Portfolio({ darkMode }) {
  const textRef = useRef();
  const isMobile = useMediaQuery("(max-width:600px)"); // détecter si mobile

  useEffect(() => {
    if (textRef.current && textRef.current.material) {
      try {
        textRef.current.material.color.set(darkMode ? "#FFD700" : "#111111");
      } catch (e) {
        // éviter crash si matériau pas prêt
      }
    }
  }, [darkMode]);

  return (
    <Container
      id="home"
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between",
        pt: 8,
        px: 6,
        flexDirection: { xs: "column", md: "row" },
        background: darkMode
          ? "linear-gradient(180deg, #0F0F0F, #2D1B69, #0F0F0F)"
          : "#ffffff",
        transition: "background-color 0.5s",
      }}
    >
      {/* Zone texte + 3D */}
      <Box
        sx={{
          flexBasis: { xs: "100%", md: "55%" },
          pr: { md: 4 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          color={darkMode ? "#cccccc" : "text.primary"}
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Salut, je suis
        </Typography>

        <Box
          sx={{
            width: isMobile ? 220 : 300,
            height: isMobile ? 120 : 100,
            mx: "auto",
            mb: 2,
          }}
        >
          <Canvas
            camera={{ position: [0, 0, isMobile ? 30 : 20], fov: isMobile ? 70 : 50 }}
            gl={{ alpha: true }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={darkMode ? 0.5 : 0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />

            {/* Fond translucide */}
            <mesh>
              <boxGeometry args={[2.5, 1.5, 1]} />
              <meshStandardMaterial color="white" opacity={0.1} transparent />
            </mesh>

            {/* Texte 3D responsive */}
            <Text3D
              ref={textRef}
              key={darkMode ? "dark" : "light"}
              font="/fonts/helvetiker_regular.typeface.json"
              size={isMobile ? 2 : 5}
              height={isMobile ? 1 : 3}
              curveSegments={12}
            >
              Diana
              <meshPhysicalMaterial
                transparent={true}
                opacity={0.9}
                metalness={0.5}
                roughness={0.3}
              />
            </Text3D>

            {/* OrbitControls désactivé sur mobile */}
            {!isMobile && <OrbitControls enablePan enableZoom enableRotate />}
          </Canvas>
        </Box>

        <Typography
          variant="h6"
          color={darkMode ? "#cccccc" : "text.secondary"}
          sx={{ mb: 3, textAlign: "center" }}
        >
          Je suis une développeuse passionnée par le web et la data.
          J&apos;adore créer des interfaces modernes, intuitives et optimisées. 
          La 3D : une passion que je transforme en expériences immersives.
        </Typography>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="contained"
            size="medium"
            href="#projets"
            sx={{
              background: "linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)",
              borderRadius: "50px",
              display: "inline-block",
              mx: "auto",
              px: 4,
              py: 1,
              fontSize: "1rem",
            }}
          >
            Telecharger mon CV ici
          </Button>
        </Box>
      </Box>

      {/* Image de profil */}
      <Box
        sx={{
          flexBasis: { xs: "100%", md: "35%" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Avatar
          alt="portrait"
          src={pdp}
          sx={{
            width: 450,
            height: 450,
            mb: 6,
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
