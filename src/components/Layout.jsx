import { Outlet } from 'react-router-dom';
import { Header, StyledLink } from 'styles/Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
