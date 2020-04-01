import styled from 'styled-components';

export const Lists = styled.ul`
  height: auto;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  justify-content: center;

  li {
    padding: 10px 20px;
    margin: 3px;
    width: 30%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  width: 100px;
  border: 1px solid #ccc;
  color: #000;
  background-color: #ddd;
  cursor: pointer;
  padding: 5px;
  display: block;
  margin-top: 10px;
  border-radius: 4px;
`;
