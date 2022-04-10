import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";

const Loading = (
  <Box
    sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <CircularProgress
      color="secondary"
      sx={{
        marginTop: "32px",
      }}
    />
  </Box>
);

export default Loading