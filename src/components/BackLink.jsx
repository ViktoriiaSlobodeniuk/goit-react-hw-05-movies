import { CgArrowLeft } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { StyledLink } from 'styles/BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <CgArrowLeft size="24" /> {children}
    </StyledLink>
  );
};
BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
