import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import { Container, Title } from './styles';
import RepoInfo from '../../components/RepoInfo';

export default function UserRepos() {
  const { login } = useParams();

  const [repoDetails, setRepoDetails] = useState([]);

  useEffect(() => {
    async function getDetails() {
      const response = await api.get(`api/users/${login}/repos`);
      setRepoDetails(response.data);
    }
    getDetails();
  }, [login]);

  console.log(repoDetails);
  return (
    <Container>
      <Title>Repos List</Title>
      <RepoInfo details={repoDetails} />
    </Container>
  );
}
