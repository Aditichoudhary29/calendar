import { styled } from "@mui/material";
import backgroundImage from "../../assets/background.avif";
export const DashboardContainer = styled("div")({
  width: "100",
  height: "100vh",
  backgroundImage: "url(" + backgroundImage + ")",
  backgroundSize: "cover",
  display: "flex",
  gap: "5rem",
  justifyContent: "center",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
});
