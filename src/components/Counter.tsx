import { useState } from 'react';
import { Box, Button, Typography, Stack, Paper } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
          minWidth: 300,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Counter: {count}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" onClick={increment}>
            Increment
          </Button>
          <Button variant="contained" color="secondary" onClick={decrement}>
            Decrement
          </Button>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Counter;
