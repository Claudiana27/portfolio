import React from "react";
import { Container, Typography, Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import SkillCircle from "../components/SkillCircle";

const educationItems = {
  fr: [
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
  ],
  en: [
    {
      title: "English Course – MSEFF Center",
      subtitle: "Certified training in oral and professional communication",
    },
    {
      title: "Currently pursuing Master 1 in Computer Science",
      subtitle: "National School of Computer Science | University of Fianarantsoa",
    },
    {
      title: "Professional Bachelor's Degree in Computer Science",
      subtitle: "National School of Computer Science | University of Fianarantsoa",
    },
    {
      title: "High School Diploma (Series C)",
      subtitle: "Saint Joseph de Cluny High School, Ambositra",
    },
  ],
};

const skillsByLang = {
  fr: [
    {
      id: "languages",
      category: "Langages",
      skills: [
        { value: 90, label: "HTML / CSS" },
        { value: 85, label: "JavaScript" },
        { value: 70, label: "PHP" },
        { value: 70, label: "Java" },
      ],
    },
    {
      id: "frameworks",
      category: "Frameworks & Librairies",
      skills: [
        { value: 90, label: "React.js" },
        { value: 70, label: "React Native" },
        { value: 50, label: "Next.js" },
        { value: 80, label: "Node.js" },
        { value: 75, label: "Express.js" },
        { value: 75, label: "Bootstrap" },
        { value: 80, label: "Tailwind CSS" },
        { value: 70, label: "Three.js" },
      ],
    },
    {
      id: "versioning",
      category: "Versionnage",
      skills: [
        { value: 80, label: "Git" },
        { value: 85, label: "GitHub" },
      ],
    },
    {
      id: "db",
      category: "SGBD",
      skills: [
        { value: 85, label: "MySQL" },
        { value: 65, label: "PostgreSQL" },
        { value: 70, label: "SQLite" },
      ],
    },
    {
      id: "deploy",
      category: "Déploiement",
      description: [
        "Frontend: Vercel, GitHub",
        "Backend: Render, Railway",
        "Mobile: EAS (Expo)",
      ],
    },
  ],
  en: [
    {
      id: "languages",
      category: "Languages",
      skills: [
        { value: 90, label: "HTML / CSS" },
        { value: 85, label: "JavaScript" },
        { value: 70, label: "PHP" },
        { value: 70, label: "Java" },
      ],
    },
    {
      id: "frameworks",
      category: "Frameworks & Libraries",
      skills: [
        { value: 90, label: "React.js" },
        { value: 70, label: "React Native" },
        { value: 50, label: "Next.js" },
        { value: 80, label: "Node.js" },
        { value: 75, label: "Express.js" },
        { value: 75, label: "Bootstrap" },
        { value: 80, label: "Tailwind CSS" },
        { value: 70, label: "Three.js" },
      ],
    },
    {
      id: "versioning",
      category: "Version Control",
      skills: [
        { value: 80, label: "Git" },
        { value: 85, label: "GitHub" },
      ],
    },
    {
      id: "db",
      category: "Databases",
      skills: [
        { value: 85, label: "MySQL" },
        { value: 65, label: "PostgreSQL" },
        { value: 70, label: "SQLite" },
      ],
    },
    {
      id: "deploy",
      category: "Deployment",
      description: [
        "Frontend: Vercel, GitHub",
        "Backend: Render, Railway",
        "Mobile: EAS (Expo)",
      ],
    },
  ],
};

const experiences = {
  fr: [
    {
      role: "Développeuse Web Stagiaire",
      org: "Direction Générale des Impôts • 2023",
      desc: (
        <>
          Conception et réalisation d’une application web pour le paiement de l’IS. Mise en place
          du <span translate="no">frontend</span> en React et développement d’API <span translate="no">backend</span> en Node.js.
        </>
      ),
      tech: "HTML/CSS, PHP, MySQL",
    },
    {
      role: "Développeuse Web Stagiaire",
      org: "ONG Bel Avenir • 2024",
      desc: "Conception et réalisation d’une application web pour le suivi de paiement et la génération des fiches de paie.",
      tech: "React, Node.js, Express, MySQL",
    },
    {
      role: "Développeuse Web Stagiaire",
      org: "Ecole Nationale d'Informatique • 2025",
      desc: "Conception et réalisation d’une application web et mobile pour la gestion des poubelles dans la ville de Fianarantsoa.",
      tech: "React, React Native, Node.js, Express, MySQL",
    },
  ],
  en: [
    {
      role: "Web Developer Intern",
      org: "General Tax Directorate • 2023",
      desc: (
        <>
          Design and development of a web application for corporate tax payment. Built the React <span translate="no">frontend</span> and Node.js API <span translate="no">backend</span>.
        </>
      ),
      tech: "HTML/CSS, PHP, MySQL",
    },
    {
      role: "Web Developer Intern",
      org: "Bel Avenir NGO • 2024",
      desc: "Design and development of a web application for payment tracking and payroll generation.",
      tech: "React, Node.js, Express, MySQL",
    },
    {
      role: "Web Developer Intern",
      org: "National School of Computer Science • 2025",
      desc: "Design and development of a web and mobile application for waste-bin management in Fianarantsoa.",
      tech: "React, React Native, Node.js, Express, MySQL",
    },
  ],
};

function About({ darkMode, lang = "fr" }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const t = {
    fr: {
      title: "A PROPOS DE MOI",
      education: "Formations & Diplômes",
      skills: "Compétences techniques",
      exp: "Stages et Expériences Professionnelles",
      tech: "Technologies",
    },
    en: {
      title: "ABOUT ME",
      education: "Education & Degrees",
      skills: "Technical Skills",
      exp: "Internships & Professional Experience",
      tech: "Technologies",
    },
  }[lang];

  const items = educationItems[lang] || educationItems.fr;
  const skillCategories = skillsByLang[lang] || skillsByLang.fr;
  const expItems = experiences[lang] || experiences.fr;

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
      <Typography
        variant={isMobile ? "h5" : "h3"}
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mt: { xs: 3 },
          fontSize: { md: 37 },
          color: darkMode ? "#cccccc" : "text.primary",
        }}
      >
        {t.title}
      </Typography>

      <Box sx={{ maxWidth: 1200, mx: "auto", mt: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          color={darkMode ? "#cccccc" : "text.secondary"}
          gutterBottom
          textAlign="center"
          sx={{ fontSize: { md: 29 } }}
        >
          {t.education}
        </Typography>

        <Box
          sx={{
            position: "relative",
            px: { xs: 2, md: 0 },
            maxWidth: { xs: "100%", md: 800 },
            mx: "auto",
            mt: { xs: 8, md: 12 },
          }}
        >
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
                    textAlign: isLeft ? "right" : "left",
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
                    fontSize="15px"
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color={darkMode ? "#cccccc" : "text.secondary"}>
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
            fontSize: { md: 29 },
          }}
        >
          {t.skills}
        </Typography>

        <Box sx={{ mt: 6 }}>
          {skillCategories.map((group) => (
            <Box
              key={group.id}
              sx={{
                mb: 5,
                p: { xs: 2, md: 3 },
                borderRadius: 4,
                backgroundColor: darkMode ? "rgba(255,255,255,0.03)" : "#f7f8fc",
                border: darkMode
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.08)",
                boxShadow: darkMode
                  ? "0 10px 25px rgba(0,0,0,0.35)"
                  : "0 10px 25px rgba(15,23,42,0.08)",
              }}
            >
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                fontWeight="bold"
                sx={{
                  mb: 3,
                  textAlign: "center",
                  color: darkMode ? "#cccccc" : "text.primary",
                }}
              >
                {group.category}
              </Typography>

              {group.description ? (
                <Box
                  sx={{
                    maxWidth: 620,
                    mx: "auto",
                    py: 1,
                    px: { xs: 1, md: 2 },
                  }}
                >
                  {group.description.map((line) => {
                    const [label, ...rest] = line.split(":");
                    const value = rest.join(":").trim();
                    return (
                      <Box
                        key={line}
                        sx={{
                          mb: 1.2,
                          px: { xs: 1.3, md: 1.8 },
                          py: 1,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          background: darkMode
                            ? "rgba(255,255,255,0.04)"
                            : "rgba(15,23,42,0.05)",
                          border: darkMode
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "1px solid rgba(15,23,42,0.1)",
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 700, color: darkMode ? "#fff" : "#111827" }}>
                          <span translate="no">{label}</span>:
                        </Typography>
                        <Typography variant="body2" sx={{ color: darkMode ? "#d5d5d5" : "#4b5563", fontWeight: 500 }}>
                          <span translate="no">{value}</span>
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    color: darkMode ? "#ffffff" : "#000000",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {group.skills.map((skill) => (
                    <Box
                      key={skill.label}
                      sx={{
                        flex: {
                          xs: group.id === "languages" || group.id === "frameworks" ? "0 0 50%" : "0 0 33.33%",
                          sm: "0 0 50%",
                          md: group.id === "languages" || group.id === "frameworks" ? "0 0 50%" : "0 0 33.33%",
                        },
                        maxWidth: {
                          xs: group.id === "languages" || group.id === "frameworks" ? "50%" : "33.33%",
                          sm: "50%",
                          md: group.id === "languages" || group.id === "frameworks" ? "50%" : "33.33%",
                        },
                        display: "flex",
                        justifyContent: "center",
                        mb: 4,
                        transition: "transform 0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <div translate="no">
                        <SkillCircle
                          value={skill.value}
                          label={skill.label}
                          color="linear-gradient(45deg, #6a0dad, #1e90ff, #ff4081)"
                          size={isMobile ? 80 : 100}
                        />
                      </div>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          color={darkMode ? "#cccccc" : "text.secondary"}
          gutterBottom
          textAlign="center"
          sx={{ fontSize: { md: 29 }, mt: 8 }}
        >
          {t.exp}
        </Typography>

        <Box sx={{ mt: 5, px: 3 }}>
          {expItems.map((exp, idx) => (
            <Box
              key={idx}
              sx={{
                mb: 4,
                p: 3,
                borderRadius: 3,
                backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  color: darkMode ? "#90caf9" : "#1e3a8a",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#6a0dad",
                  },
                }}
              >
                {exp.role}
              </Typography>

              <Typography variant="subtitle2" color={darkMode ? "white" : "black"}>
                {exp.org}
              </Typography>

              <Typography color={darkMode ? "white" : "black"} sx={{ mt: 1 }}>
                {exp.desc}
              </Typography>

              <Typography color={darkMode ? "white" : "black"} sx={{ mt: 1, fontStyle: "italic", fontSize: 14 }}>
                <b>{t.tech} :</b> <span translate="no">{exp.tech}</span>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default About;
