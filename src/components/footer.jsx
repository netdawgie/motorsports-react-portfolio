// src/components/footer.jsx
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1rem .5rem;
  margin-top: 2rem;
  border-top: 2px solid ${({ theme }) => theme.accent};
  font-size: 0.85rem;
  color: #f1f1f1;
  background-color: #545454;
`;

const FooterLinks = styled.div`
  margin-top: 0.5rem;

  a {
    margin: 0 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.accent};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Scott Hinson / Blak Eye Visual Communication</p>
      <FooterLinks>
        <a href="https://github.com/netdawgie" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/scotthinson" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </FooterLinks>
    </FooterWrapper>
  );
}
