import { styled } from "@mui/material";
export const RightCalendarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  backgroundImage:
    "url(https://img.freepik.com/premium-vector/light-abstract-background-with-purple-wave-backdrop-banners-billboards-cards-template-business-backgrounds-websites-blanks_589396-619.jpg)",
  backgroundSize: "cover",
  borderRadius: "6.25rem",
  height: "43rem",
  marginRight: "5rem",
  width: "100%",
  "@media (max-width: 480px)": {
    marginRight: "0",
    justifyContent: "flex-start",
    width: "100%",
    borderRadius: "0",
  },
});
export const BlockContainer = styled("div")({
  display: "grid",
  justifyItems: "center",
  justifyContent: "center",
  columnGap: "1rem",
  rowGap: "1rem",
  width: "100%",
  gridTemplateColumns: "repeat(7, 0fr)",
  "@media (max-width: 480px)": {
    rowGap: "0.5rem",
    columnGap: "0.5rem",
    paddingBottom: "2rem",
  },
});
export const DateBlock = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4rem",
  cursor: "pointer",
  height: "4rem",
  boxShadow: 24,
  backgroundColor: "#EBEAFF",
  border: "1px solid #563A9C",
  borderRadius: "1.25rem",
  "@media (max-width: 480px)": {
    width: "1.5rem",
    height: "1.5rem",
  },
});

export const HeaderContainer = styled("div")({
  display: "flex",
  marginTop: "2rem",
  alignItems: "center",
  justifyContent: "space-between",
  width: "35rem",
  marginBottom: "1rem",
  "@media (max-width: 480px)": {
    width: "100%",
  },
});
