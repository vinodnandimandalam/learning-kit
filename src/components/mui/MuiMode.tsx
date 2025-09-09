import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const MuiMode = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
    </Box>
  );
};
