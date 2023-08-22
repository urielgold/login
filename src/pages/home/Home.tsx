import { Card, CardContent, Typography } from "@mui/material";
import logo from "assets/images/cybellum-logo-vertical-black.svg";

import { useGetNotificationsQuery } from "../../api/notification/notifications";
import Styled from "./styled";

export default function Home() {
  const { data, error, isLoading } = useGetNotificationsQuery();

  if (error) return <h1>Something went wrong</h1>;

  if (isLoading) return <p>loading...</p>;

  const { title, description, created } = data!.find((n) => n.id === 1) || {};

  return (
    <Styled.Box>
      <Card sx={{ maxWidth: 345, textAlign: "center" }}>
        <CardContent>
          <Styled.CardMedia component="img" alt="Cybellum" image={logo} />
          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {created && new Date(created).toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    </Styled.Box>
  );
}
