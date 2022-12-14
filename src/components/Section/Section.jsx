import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
