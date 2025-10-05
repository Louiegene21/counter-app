import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

type Props = {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
};

const ThemeToggle = ({ toggleTheme, mode }: Props) => {
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;
