import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SkillCircle from "../components/SkillCircle";

const items = [
  {
    title: "Actuellement en Master 1 en Informatique",
    subtitle: "A l'Ecole Nationale d'Informatique | Université de Fianarantsoa",
  },
  {
    title: "Diplôme de Licence professionnel en Informatique",
    subtitle: "A l'Ecole Nationale d'Informatique | Université de Fianarantsoa",
  },
  {
    title: "Baccalauréat série C",
    subtitle: "Lycée Saint Joseph de Cluny Ambositra",
  },
];

function About({ darkMode }) {
  return (
    <Container
      id="about"
      maxWidth={false}
      sx={{
        py: 10,
        background: darkMode ? "linear-gradient(180deg, #0F0F0F 0%, #2D1B69 50%,#0F0F0F 100%)" : "#ffffff",
        transition: "background-color 0.5s",
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: darkMode ? "#cccccc" : "text.primary" }}
      >
        A PROPOS DE MOI
      </Typography>

      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color={darkMode ? "#cccccc" : "text.secondary"}
          gutterBottom
        >
          Formations & Diplômes
        </Typography>

              <Box sx={{ position: "relative", px: 2, maxWidth: 800, mx: "auto", top: 50 }}>
  {/* Ligne verticale */}
  <Box
    sx={{
      width: 4,
      height: "100%",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: 0,
      background: "linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)",
      borderRadius: 50,
    }}
  />

  {items.map((item, index) => {
    const isLeft = index % 2 === 0;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            mb: 6,
            width: "50%",
            textAlign: isLeft ? "right" : "left",
            position: "relative",
            left: isLeft ? "-4%" : "50%",
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color={darkMode ? "#cccccc" : "text.primary"}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color={darkMode ? "#cccccc" : "text.secondary"}
          >
            {item.subtitle}
          </Typography>
        </Box>
      </motion.div>
    );
  })}
</Box>

        <Typography
  variant="h4"
  fontWeight="bold"
  sx={{
    mt: 25,
    mb: 6,
    color: darkMode ? "#cccccc" : "text.secondary",
    textAlign: "center",
  }}
>
  Compétences techniques
</Typography>

<Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    mt: 6,
  }}
>
  {[
    { value: 90, label: "React.js" },
    { value: 90, label: "Next.js" },
    { value: 60, label: "Node.js" },
    { value: 70, label: "PHP" },
    { value: 70, label: "Java" },
    { value: 90, label: "HTML / CSS" },
    { value: 70, label: "Bootstrap/Tailwind" },
    { value: 70, label: "Three.js" },
    { value: 70, label: "Typescript/Nest.js" },
  ].map((skill, index) => (
    <Box
      key={index}
      sx={{
        flex: "0 0 33.33%", // exactement 3 par ligne
        maxWidth: "33.33%",
        display: "flex",
        justifyContent: "center",
        mb: 4,
      }}
    >
      <SkillCircle value={skill.value} label={skill.label} color="linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)" size={100} />
      {/* réduit un peu la taille pour que ça rentre 3 par ligne */}
    </Box>
  ))}
</Box>

      </Box>
    </Container>
  );
}

export default About;
