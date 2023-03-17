import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-left: 40px;
  box-shadow: 3px 3px 3px silver;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #000;
  font-weight: bold;

  &.active {
    color: orangered;
  }
`;
