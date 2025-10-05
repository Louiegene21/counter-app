import { Container, Box } from '@mui/material';
import Counter from './components/Counter';
import ThemeToggle from './components/ThemeToggle';

type AppProps = {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
};

function App({ toggleTheme, mode }: AppProps) {
  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" pt={2}>
        <ThemeToggle toggleTheme={toggleTheme} mode={mode} />
      </Box>
      <Counter mode={mode} />
    </Container>
  );
}

export default App;
