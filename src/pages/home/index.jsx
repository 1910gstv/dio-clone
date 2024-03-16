import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Title, TitleHighlight, TextContent, Container } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora.
          </Title>
          <TextContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere nostrum culpa, fugit dolorum quibusdam corporis.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/front-view-elegant-businesswoman-using-laptop_23-2148788847.jpg?w=740&t=st=1709680565~exp=1709681165~hmac=26dea23f6dc4e7f4495cfef477f8b534f877452dfa98b93210038177054a7722"
            alt="#"
            width="550px"
          />
        </div>
      </Container>
    </>
  );
};

export { Home };
