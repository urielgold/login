import { CardMedia } from "@mui/material"
import monitor from "assets/images/login/imac-dig-twins.png";
import { Title } from "./Title/Title";

import { Form } from "./Form/Form";
import * as S from "./styled";
import {Footer} from './Footer/Footer';

export default function Login() {

  return (
    <S.Layout>
      <S.LeftContainer>
        <Title />
        <S.ColumnFlexGrow width="400px">
          <Form />
          <Footer/>
        </S.ColumnFlexGrow>
      </S.LeftContainer>
      <S.RightContainer>
        <CardMedia
          component="img"
          alt="Digital Twins"
          image={monitor}
          sx={{ px: 4, width: "inherit" }}
        />
      </S.RightContainer>
    </S.Layout>
  );
}
