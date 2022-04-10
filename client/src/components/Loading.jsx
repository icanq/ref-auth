import { Box } from '@mui/material'
import { CircularProgress } from '@mui/material'

export default function Loading() {
  return (<Box
    sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
      <CircularProgress
        color="secondary" 
        sx={{
          marginTop: "32px"
        }}
      />
  </Box>)
}