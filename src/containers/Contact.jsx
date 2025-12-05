import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Container, Typography, Box, TextField, Button, useMediaQuery, Snackbar, Alert } from "@mui/material";
import emailjs from "emailjs-com";

function FloatingParticles({ count = 1500, darkMode }) {
  const pointsRef = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const radius = 10 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;

      const time = state.clock.getElapsedTime();
      pointsRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition}>
      <PointMaterial
        transparent
        color={darkMode ? "#6a0dad" : "#2D1B69"}
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Contact({ darkMode }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleResize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage("Veuillez remplir tous les champs !");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    emailjs.send(
      "service_20l5otv",       // ton Service ID
      "template_1p99z2p",      // ton Template ID
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: "nomenjanaharydiana27@gmail.com"
      },
      "8XCQxbDU7QhR0jZNb"      // Public Key
    ).then((result) => {
      setSnackbarMessage("Message envoyé avec succès !");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setFormData({ name: "", email: "", message: "" }); // reset form
    }, (error) => {
      setSnackbarMessage("Erreur lors de l'envoi. Réessayez.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      console.error(error.text);
    });
  };

  return (
    <Container
      id="contact"
      maxWidth={false}
      sx={{
        width: { xs: "97%", md: "90%" },
        px: { xs: 1, md: 6 },
        py: { xs: 6, md: 10 },
        background: darkMode
          ? "linear-gradient(180deg, #0F0F0F 0%, #2D1B69 50%, #0F0F0F 100%)"
          : "#ffffff",
        transition: "background-color 0.5s",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      {/* Particules en fond */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Canvas
          camera={{
            position: [0, 0, isMobile ? 25 : 15],
            fov: isMobile ? 75 : 50,
          }}
        >
          <ambientLight intensity={0.3} />
          <FloatingParticles darkMode={darkMode} count={isMobile ? 800 : 1500} />
        </Canvas>
      </Box>

      {/* Contenu principal */}
      <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", px: { xs: 2, sm: 4, md: 0 } }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          fontSize="37px"
          gutterBottom
          color={darkMode ? "#fff" : "text.primary"}
        >
          Contact
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: isMobile ? "100%" : 600, mx: "auto", mt: 4 }}>
          <TextField
            label="Nom"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: darkMode ? "#fff" : "inherit" } }}
            InputProps={{ style: { color: darkMode ? "#fff" : "inherit" } }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: darkMode ? "#fff" : "inherit" } }}
            InputProps={{ style: { color: darkMode ? "#fff" : "inherit" } }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={isMobile ? 3 : 4}
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: darkMode ? "#fff" : "inherit" } }}
            InputProps={{ style: { color: darkMode ? "#fff" : "inherit" } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: isMobile ? "30%" : "auto",
              fontSize: "0.7rem",
              background: "linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)"
            }}
          >
            Envoyer
          </Button>
        </Box>
      </Box>

      {/* Texte copyright */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          width: "100%",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="body2" color={darkMode ? "#ccc" : "text.secondary"} sx={{fontSize: "12px", ml:{md: "-10%"}}}>
          © {new Date().getFullYear()} Diana. Tous droits réservés.
        </Typography>
      </Box>

      {/* Snackbar pour feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbarSeverity} onClose={() => setSnackbarOpen(false)} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
