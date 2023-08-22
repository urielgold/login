import { CardMedia, Typography } from "@mui/material";
import cybellumSign from "../../../assets/images/login/cybellum-sign.svg";

export const Title = () => (
  <>
    <CardMedia
      component="img"
      alt="Cybellum"
      image={cybellumSign}
      sx={{ height: "55px", width: "150px", mb: 4 }}
    />
    <Typography variant="display1" color='secondary.main'>
      Welcome to the <br />Product Security Platform
    </Typography>
  </>
);
