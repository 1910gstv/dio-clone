import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Column,
  Container,
  CreateText,
  ForgetText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Login</TitleLogin>
            <SubtitleLogin>Faça seu login e make de change._</SubtitleLogin>
            <form>
              <Input placeholder="Email" leftIcon={<MdEmail />} />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              ></Input>
              <Button
                title="Entrar"
                variant="secondary"
                onClick={handleClickSignIn}
                type="button"
              ></Button>
            </form>
            <Row>
              <ForgetText>Esqueci minha senha</ForgetText>
              <CreateText>Criar login</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
