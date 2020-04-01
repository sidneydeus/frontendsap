import styled from 'styled-components';
import List from '../../components/List';

export const Title = styled.h1`
  font-size: 28px;
  padding: 10px;
  text-align: center;
`;
export const Container = styled.div`
  width: 90%;
  min-width: 700px;
  height: auto;
  margin: auto auto 100px auto;
`;

export const ListUsers = styled(List)``;

export const ContainerButtons = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  width: 100px;
  border: 1px solid #ccc;
  color: #000;
  background-color: #ddd;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  margin-top: 10px;
  border-radius: 4px;
`;
