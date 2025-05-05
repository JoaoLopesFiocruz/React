import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import theme from './styles/theme.js'; // Aqui estamos importando o tema
import GlobalStyles from './styles/global';
// Aqui, o TS pode inferir os tipos com o 'ThemeProvider' e 'theme'
const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
