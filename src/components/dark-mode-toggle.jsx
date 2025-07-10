// src/components/dark-mode-toggle.jsx
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: #272727;  // ✅ Consistent text color across themes
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
`;

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <ToggleButton onClick={toggleDarkMode}>
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </ToggleButton>
  );
}

