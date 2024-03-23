import React from "react";

import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import {
  Container,
  Wrapper,
  Column,
  Title,
  SubtitleLogin,
  TitleLogin,
  Row,
  BottomText,
  SpanText,
  SubtitleBottomText,
} from "./styles";

const schema = yup.object({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(3).required(),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    const nome = formData.nome;
    const email = formData.email;
    const password = formData.password;

    console.log(formData);

    try {
      api.get("/users").then((response) => {
        const users = response.data.map((user) => user.email);
        if (users.indexOf(email) > -1) {
          console.log("Usuário já existe");
        } else {
          api
            .post("/users", {
              name: nome,
              email: email,
              senha: password,
            })
            .then((response) => {
              if (
                response.data.name != null &&
                response.data.email != null &&
                response.data.senha != null
              ) {
                console.log("Usuario cadastrado");
                navigate("/login");
              }
            });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const returnLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            suscipit molestiae labore officiis ratione quaerat non similique!
            Recusandae itaque aut tenetur commodi adipiscii?
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                placeholder="Nome Completo"
                control={control}
                leftIcon={<MdPerson />}
              ></Input>
              <Input
                name="email"
                placeholder="Email"
                control={control}
                leftIcon={<MdEmail />}
              ></Input>
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                control={control}
                leftIcon={<MdLock />}
              ></Input>
              <Button
                title="Cadastrar"
                type="submit"
                variant="secondary"
              ></Button>
            </form>
            <Row>
              <SubtitleBottomText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                quam ab reprehenderit nesciunt animi sit.
              </SubtitleBottomText>
            </Row>
            <Row>
              <BottomText>
                Já tenho conta.
                <SpanText onClick={returnLogin}>Fazer Login</SpanText>
              </BottomText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
