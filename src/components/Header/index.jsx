import React from "react";
import { Button } from "../Button";

import {
  Input,
  SearchInputContainer,
  Row,
  Column,
  Container,
  Menu,
  MenuRight,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src="" alt="" />
          <SearchInputContainer>
            <Input placeholder="...Buscar" />
          </SearchInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="$">Home</MenuRight>
          <Button title="Entrar"></Button>
          <Button title="Cadastrar"></Button>
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
