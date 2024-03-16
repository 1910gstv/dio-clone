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
  UserPicture,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img
            src="https://play-lh.googleusercontent.com/P3xTS7gQrh0S2e_99KmHVGiVUcvepvj4eFFhqU_y6XFRegRoo1fTZ8r6t1MUsmfRxXNJ"
            alt=""
            width="47px"
            height="47px"
          />
          {autenticado ? (
            <>
              <SearchInputContainer>
                <Input placeholder="...Buscar" />
              </SearchInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </>
          ) : (
            <>
              <MenuRight href="$">Home</MenuRight>
              <Button title="Entrar"></Button>
              <Button title="Cadastrar"></Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
