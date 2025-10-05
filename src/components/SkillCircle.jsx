import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

function SkillCircle({ value, label, color }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={2}>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={value}
          size={80}
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
                      variant="h7"
                      component="div"
                   
          >
            {`${value}%`}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="subtitle2"
        fontSize="13px"
        fontWeight= "bold"
        sx={{ mt: 1}}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default SkillCircle;
