import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../styles/Themes';

const LogoFilter = posed.img({
  hoverable: true,
  init: {
    filter: `grayscale(100%)`,
  },
  hover: {
    filter: `grayscale(0%)`,
  },
});

const StyledLogo = styled(LogoFilter)`
  border: 10px solid var(--text-color-light);
  transition: all 0.5s;
  display: none;

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    width: 66%;
    display: block;
  }
`;
const Logo = () => (
  <StyledLogo
    src="https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300/v1544466783/clm_me/assets/logo.png"
    alt="Self-Portrait of me"
  />
);

export default Logo;
