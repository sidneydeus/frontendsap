import React from 'react';
import { Container, ContainerInfo, Button } from './styles';
import history from '../../services/history';
import { GoLinkExternal } from 'react-icons/go';

export default function RepoInfo(props) {
  const details = props.details;

  return (
    <Container>
      <p>
        <Button onClick={() => history.push('/')}>Go Home</Button>
      </p>
      {details.map(detail => (
        <ContainerInfo key={detail.id}>
          <p>
            ID: <strong>#{detail.id}</strong>
          </p>
          <p>
            Name: <strong>{detail.name}</strong>
          </p>
          <p>
            Visit Repo Page:
            <a href={detail.html_url} target="_blank" rel="noopener noreferrer">
              {detail.html_url}
              <GoLinkExternal size={14} />
            </a>
          </p>
        </ContainerInfo>
      ))}
      <p>
        <Button onClick={() => history.push('/')}>Go Home</Button>
      </p>
    </Container>
  );
}
