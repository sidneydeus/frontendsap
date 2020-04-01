import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import { Container, Title } from './styles';
import UserInfo from '../../components/UserInfo';

export default function UserDetails() {
  const { login } = useParams();

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    async function getDetails() {
      const response = await api.get(`api/users/${login}/details`);
      setUserDetails(response.data);
    }
    getDetails();
  }, [login]);

  return (
    <Container>
      <Title>User Details</Title>
      <UserInfo details={userDetails} />
    </Container>
  );
}
