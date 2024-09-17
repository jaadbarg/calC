import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Styled Components
const HeaderContainer = styled.header`
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: background-color 0.3s ease;

  &.scrolled {
    background-color: rgba(74, 144, 226, 0.9); /* Semi-transparent primary color */
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
  font-weight: 700; /* Bold font weight */
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLinkItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  font-weight: 500; /* Medium font weight */

  &:after {
    content: '';
    width: 0%;
    height: 2px;
    background: #50e3c2; /* Secondary color */
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

class Header extends React.Component {
  state = { scrolled: false };

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
  };

  render() {
    return (
      <HeaderContainer className={this.state.scrolled ? 'scrolled' : ''}>
        <Nav>
          <Logo onClick={this.scrollToTop}>CalC USA</Logo>
          <NavLinks>
            {[
              { name: 'Home', to: 'home' },
              { name: 'About Us', to: 'about' },
              { name: 'Our Services', to: 'services' },
              { name: 'Exam Portfolio', to: 'examportfolio' },
              { name: 'Pricing', to: 'pricing' },
              { name: 'Testimonials', to: 'testimonials' },
              { name: 'Our Clients', to: 'clients' },
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
