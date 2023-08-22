import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const Layout = styled(Box)((props) => ({
  backgroundColor: props.theme.palette.background.default,
  paddingTop: "160px",
  paddingBottom: "30px",
  display: "flex",
  flex: 1,
  height: "100vh",
}));

export const LeftContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "636px",
  marginLeft: "182px",
});


export const ColumnFlexGrow = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1
});

export const RightContainer = styled(Box)({
  display: "flex",
  flex: 1
});