import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  background-color: #7c7f8a;
  padding: 30px;
  border: 1px solid;
  border-color: #93b9ee;
  border-radius: 10px;
`;

export const ContainerHome = styled(Container)`
  border: none;
`;

export const ContainerAuth = styled(Container)`
  text-align: center;
`;

export const ContainerWelcome = styled(ContainerAuth)`
  text-align: right;
`;

export const MainTitle = styled.h1`
  font-size: 40px;
  color: white;
  text-align: center;
  line-height: 32px;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: white;
  text-align: center;
  line-height: 32px;
`;

export const Message = styled.p`
  font-size: 36px;
  color: white;
  text-align: center;
  line-height: 32px;
`;

export const WelcomeMessage = styled.span`
  font-size: 36px;
  color: white;
  margin-right: 14px;
  line-height: 32px;
`;
export const Link = styled(NavLink)`
  font-size: 36px;
  color: white;
  text-align: center;
  line-height: 32px;
  &:not(:last-child) {
    margin-right: 30px;
  }
  text-decoration: none;
  &:hover,
  &:focus {
    border-bottom: 1px solid;
    border-color: white;
  }
`;
