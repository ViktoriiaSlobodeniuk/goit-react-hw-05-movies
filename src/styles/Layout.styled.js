import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-left: 40px;
  box-shadow: 0px 10px 10px #072f13;
  background-color: #093e19;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  padding: 15px;
  color: #000;
  font-weight: bold;

  &.active {
    color: white;
  }
`;
