import { styled } from "@mui/material";
import backgroundImage from "../../assets/background.avif";
export const DashboardContainer = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + backgroundImage + ")",
  backgroundSize: "cover",
  display: "flex",
  gap: "5rem",
  justifyContent: "center",
  alignItems: "center",
  backgroundRepeat: "no-repeat",

  // Media query for smaller screens
  "@media (max-width: 768px)": {
    gap: "2rem", // Adjust gap for smaller screens
    flexDirection: "column", // Stack the content vertically on small screens
  },

  // Media query for even smaller screens (mobile)
  "@media (max-width: 480px)": {
    gap: "1rem", // Further reduce the gap on mobile devices
    justifyContent: "flex-start",
    width: "100%", // Align items to the start
  },
}));
