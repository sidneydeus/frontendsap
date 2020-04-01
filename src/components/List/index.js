import React from 'react';
import { Lists, Button } from './styles';
import history from '../../services/history';
import { GoPerson } from 'react-icons/go';

export default function List(props) {
  const items = props.items;
  const listItems = items.map(item => (
    <li key={item.id}>
      <p>
        ID: <strong>#{item.id}</strong>
      </p>
      <p>
        <GoPerson size={16} /> Username: <strong>{item.login}</strong>
        <Button onClick={() => history.push(`/userdetails/${item.login}`)}>
          Details
        </Button>
      </p>
    </li>
  ));
  return <Lists>{listItems}</Lists>;
}
