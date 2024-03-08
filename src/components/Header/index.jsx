import React from "react";
import { Button } from "../Button";

import {
  Input,
  SearchInputContainer,
  Row,
  Container,
  Menu,
  MenuRight,
  Wrapper,
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src="https://play-lh.googleusercontent.com/P3xTS7gQrh0S2e_99KmHVGiVUcvepvj4eFFhqU_y6XFRegRoo1fTZ8r6t1MUsmfRxXNJ" alt="" width='47px' height='47px'/>
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
