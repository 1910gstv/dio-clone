import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

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

const schema = yup
  .object({
    email: yup
      .string()
      .email("e-mail não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo três caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length == 1) {
        navigate("/feed");
      } else {
        alert('E-mail inválido')
      }
    } catch {
      alert("houve um erro ");
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                placeholder="Email"
                control={control}
                leftIcon={<MdEmail />}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                placeholder="Senha"
                control={control}
                type="password"
                leftIcon={<MdLock />}
                errorMessage={errors?.password?.message}
              ></Input>
              <Button title="Entrar" variant="secondary" type="submit"></Button>
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
