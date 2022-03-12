import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors.js';
import { Title } from '../Styles/title.js';

const NavbarStyled = styled.nav`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${pizzaRed};
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 3px 3px 5px #2c2c2c;
`;

const Logo = styled(Title)`
  font-size: 2rem;
  color: #ffffff;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo>Snapp Pizza🍕</Logo>
    </NavbarStyled>
  );
}

export default Navbar;