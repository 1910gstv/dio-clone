import React from "react";

import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({ nome, percentual }) => {
  return (
    <Container>
      <UserPicture />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export { UserInfo };
