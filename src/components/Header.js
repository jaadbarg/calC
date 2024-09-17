import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon

// Styled Components
const HeaderContainer = styled.header`
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: background-color 0.3s ease;

  &.scrolled {
    background-color: #333333; 
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1`
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  font-weight: 700;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #333333;
    position: fixed;
    top: 70px; /* Adjust based on header height */
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 200px;
    height: calc(100% - 70px);
    transition: right 0.3s ease;
    padding: 20px;
  }
`;

const NavLinkItem = styled.li`
  margin-left: 30px;

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  font-weight: 500;

  &:after {
    content: '';
    width: 0%;
    height: 2px;
    background: #002060;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &.active:after {
    width: 100%;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

class Header extends React.Component {
  state = { scrolled: false, isOpen: false };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.setState({ isOpen: false }); // Close menu when logo is clicked
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <HeaderContainer className={this.state.scrolled ? 'scrolled' : ''}>
        <Nav>
          <Logo onClick={this.scrollToTop}>CalC USA</Logo>
          <HamburgerIcon onClick={this.toggleMenu}>
            <FaBars />
          </HamburgerIcon>
          <NavLinks isOpen={this.state.isOpen}>
            {[
              { name: 'Home', to: 'home' },
              { name: 'Features', to: 'features' },
              { name: 'Exam Portfolio', to: 'examportfolio' },
              { name: 'Pricing', to: 'pricing' },
              { name: 'Our Clients', to: 'clients' },
              { name: 'Testimonials', to: 'testimonials' },
              { name: 'FAQs', to: 'faqs' },
              { name: 'Contact', to: 'contact' },
            ].map((item, index) => (
              <NavLinkItem key={index}>
                <NavLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                  onClick={this.closeMenu}
                >
                  {item.name}
                </NavLink>
              </NavLinkItem>
            ))}
          </NavLinks>
        </Nav>
      </HeaderContainer>
    );
  }
}

export default Header;
