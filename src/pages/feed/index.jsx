import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHighlight># Ranking TOP 5 da Semana</TitleHighlight>
          <UserInfo
            nome="Josefina Fina"
            percentual={35}
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          />
          <UserInfo
            nome="Josefina Fina"
            percentual={70}
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          />

          <UserInfo
            nome="Josefina Fina"
            percentual={15}
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          />
          <UserInfo
            nome="Josefina Fina"
            percentual={69}
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          />
          <UserInfo
            nome="Josefina Fina"
            percentual={97}
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
