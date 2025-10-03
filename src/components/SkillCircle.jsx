import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

function SkillCircle({ value, label, color, darkMode }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={2}>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={value}
          size={100}
          thickness={5}
          sx={{ color }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
                      variant="h6"
                      component="div"
                      color={ darkMode ? "#000000" :  "#ffffff"}
          >
            {`${value}%`}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="subtitle2"
        sx={{ mt: 1, color: darkMode ? "#000" : "#ffffff"}}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default SkillCircle;
