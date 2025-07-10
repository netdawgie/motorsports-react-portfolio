// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Skills from './pages/skills';
import Contact from './pages/contact';
import { lightTheme, darkTheme } from './styles/theme';

// 🧱 Styled layout wrapper
const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};

  main {
    flex: 1;
  }
`;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/motorsports-react-portfolio">
        <MainWrapper>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>

          <Footer />
        </MainWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}
