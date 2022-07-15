import { ThemeProvider } from 'styled-components';
import Router from './components/Router/Router';
import { GlobalStyle } from './styles';
import defaultTheme from './themes/defaultTheme';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

export default App;
