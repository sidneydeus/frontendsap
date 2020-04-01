import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  ListUsers,
  ContainerButtons,
  Button
} from './styles';
import api from '../../services/api';
import parse from 'parse-link-header';
import { GoArrowRight, GoMarkGithub } from 'react-icons/go';

export default function Main() {
  const [userslist, setUserslist] = useState([]);
  const [linknext, setLinknext] = useState([]);
  const [since, setSince] = useState([]);

  useEffect(() => {
    async function getGithubUsers() {
      const githubuserlist = await api.get(`api/users?since=${since}`);
      const parsed = parse(githubuserlist.headers.link);

      setLinknext(parsed.next.since);
      setUserslist(githubuserlist.data);
    }
    getGithubUsers();
  }, [since]);

  function handleItemsNext(since) {
    if (since > 0) {
      setSince(since);
    }
  }

  function handleItemsFirst() {
    setSince('');
  }

  return (
    <Container>
      <Title>
        <GoMarkGithub size={21} />
        GitHub Users List
      </Title>
      <ListUsers items={userslist} />
      <ContainerButtons>
        <Button onClick={() => handleItemsFirst()}>Restart</Button>
        <Button onClick={() => handleItemsNext(linknext)}>
          Next <GoArrowRight size={14} />
        </Button>
      </ContainerButtons>
    </Container>
  );
}
