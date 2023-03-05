import styled from '@emotion/styled';

export const Contact = styled.li`
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Button = styled.button`
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #752ab5;
  color: white;
  border-radius: 10px;
  border-color: #752ab5;
  outline: none;
  font-size: 24px;
  &:hover,
  :focus {
    background-color: #93b9ee;
    color: black;
    border-color: #93b9ee;
  }
`;
