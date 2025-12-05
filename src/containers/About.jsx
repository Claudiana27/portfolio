import React from "react";
import { Container, Typography, Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import SkillCircle from "../components/SkillCircle";

const items = [
  {
    title: "Cours d’anglais – Centre MSEFF",
    subtitle: "Formation certifiée en communication orale et professionnelle",
  },
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
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container
      id="about"
      maxWidth={false}
      sx={{
        width: { xs: "97%", md: "90%" },
        px: { xs: 1, md: 6 },
        py: { xs: 6, md: 10 },
        background: darkMode
          ? "linear-gradient(180deg, #0F0F0F 0%, #2D1B69 50%, #0F0F0F 100%)"
          : "#ffffff",
        transition: "background-color 0.5s",
        overflowX: "hidden",
      }}
    >
      {/* Titre */}
      <Typography
        variant={isMobile ? "h5" : "h3"}
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold",mt: {xs: 3},fontSize: {md: 37}, color: darkMode ? "#cccccc" : "text.primary" }}
      >
        A PROPOS DE MOI
      </Typography>

      <Box sx={{ maxWidth: 1200, mx: "auto", mt: { xs: 4, md: 6 } }}>
        {/* Sous-titre */}
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          color={darkMode ? "#cccccc" : "text.secondary"}
          gutterBottom
          textAlign={isMobile ? "center" : "center"}
          sx={{
            fontSize: {md: 29}
          }}
        >
          Formations & Diplômes
        </Typography>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
            px: { xs: 2, md: 0 },
            maxWidth: { xs: "100%", md: 800 },
            mx: "auto",
            mt: {xs: 8, md: 12},
          }}
        >
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
                    width: { xs: "60%", sm: "50%" },
                    textAlign:  isLeft ? "right" : "left" ,
                    position: "relative",
                    left: {
                      xs: isLeft ? "-16%" : "50%",
                      sm: isLeft ? "-4%" : "50%",
                    },
                    px: { xs: 1, md: 2 },
                  }}
                >
                  <Typography
                    variant={isMobile ? "subtitle1" : "h6"}
                    fontWeight="bold"
                    color={darkMode ? "#cccccc" : "text.primary"}
                    fontSize= "15px"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body2"}
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
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          sx={{
            mt: { xs: 12, md: 25 },
            mb: 6,
            color: darkMode ? "#cccccc" : "text.secondary",
            textAlign: "center",
            fontSize: {md: 29}
          }}
        >
          Compétences techniques
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            color: darkMode ? "#ffffff" : "#000000",
            fontSize: "15px",
            fontWeight: "bold",
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
            { value: 70, label: "Bootstrap/TailwindCss" },
            { value: 70, label: "Three.js" },
            { value: 70, label: "Typescript/Nest.js" },
          ].map((skill, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: "0 0 33.33%",
                  sm: "0 0 50%",
                  md: "0 0 33.33%",
                },
                maxWidth: {
                  xs: "33.33%",
                  sm: "50%",
                  md: "33.33%",
                },
                display: "flex",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <SkillCircle
                value={skill.value}
                label={skill.label}
                color="linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)"
                size={isMobile ? 80 : 100} // taille réduite sur mobile
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default About;
