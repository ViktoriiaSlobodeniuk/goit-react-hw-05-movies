import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from 'styles/Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
