import React from 'react';

import { Container, ContainerInfo, Button } from './styles';
import history from '../../services/history';

export default function UserInfo(props) {
  const detail = props.details;

  return (
    <Container>
      <ContainerInfo>
        <p>
          ID: <strong>#{detail.id}</strong>
        </p>
        <p>
          Name: <strong>{detail.name}</strong>
          <Button onClick={() => history.push(`/repos/${detail.login}`)}>
            Repos
          </Button>
        </p>
      </ContainerInfo>
    </Container>
  );
}
