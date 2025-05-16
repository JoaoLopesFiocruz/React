import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import {Routes} from './routes/index.jsx'
import theme from './styles/theme.js'; // Aqui estamos importando o tema
import GlobalStyles from './styles/global.js';
// Aqui, o TS pode inferir os tipos com o 'ThemeProvider' e 'theme'
const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

const root = createRoot(document.getElementById('root') );
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
