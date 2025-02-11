"use client"
import { useMediaQuery, useTheme } from "@mui/material"

function useResponsive() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return isMobile
}

export default useResponsive
