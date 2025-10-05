import { Typography, Box } from '@mui/material';

type TitleProps = {
  mode: 'light' | 'dark';
};

const Title = ({ mode }: TitleProps) => {
  return (
    <Box textAlign="center" mt={4} mb={4}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 700,
          letterSpacing: 2,
          color: mode === 'light' ? '#1976d2' : '#90caf9', // primary color in light/dark mode
        }}
      >
        COUNTER APP
      </Typography>
    </Box>
  );
};

export default Title;
