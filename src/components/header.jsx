// src/components/header.jsx
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/react-app-sh-logo.png';
import DarkModeToggle from './dark-mode-toggle'; 

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ededed;
  border-bottom: 2px solid ${({ theme }) => theme.accent};
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 0.75rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.accent};
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #111111;
  text-decoration: none;
  font-weight: bold;
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.accent}` : 'none'};
  padding-bottom: 2px;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;

export default function Header({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Brand>
        <Logo src={logo} alt="Scott Hinson" />
        <Title>Visual Communicator</Title>
      </Brand>

      <Nav>
        <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
        <NavLink to="/skills" active={location.pathname === '/skills'}>Skills</NavLink>
        <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
      </Nav>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </HeaderContainer>
  );
}


