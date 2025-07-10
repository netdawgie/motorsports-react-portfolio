// src/components/page-wrapper.jsx
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.4s ease, color 0.4s ease;
`;

export default function PageWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
