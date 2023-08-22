import { Button, Typography } from "@mui/material";
import { links } from "./constants";

import * as S from './styled';

export const Footer = () => (
  <S.Container>
    {Object.keys(links).map((link) => (
      <Button key={link}>
        <Typography variant="subtitle2" color="secondary.light">
          {link}
        </Typography>
      </Button>
    ))}
  </S.Container>
);
