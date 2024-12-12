import { styled } from "@mui/material";

export const ImageContainer = styled("div")({
  borderRadius: "6.25rem",
  display: "flex",
  marginLeft: "5rem",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 480px)": {
    gap: "1rem",
    marginLeft: "0",
    width: "100%",
  },
});
export const ResponsiveImage = styled("img")(() => ({
  width: "25rem",
  height: "25rem",
  borderRadius: "6.25rem",

  "@media (max-width: 480px)": {
    width: "calc(100% - 2rem)",
    marginTop: "2rem",
  },
}));
