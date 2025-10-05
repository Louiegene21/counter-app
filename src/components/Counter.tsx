import { useState } from 'react';
import { Box, Button, Typography, Stack, Paper } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { motion } from 'framer-motion';
import Title from './Title'; // import Title component

type CounterProps = {
  mode: PaletteMode;
};

const Counter = ({ mode }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
<Box
  display="flex"
  borderRadius={5}
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  minHeight={700}
  minWidth={800}
  sx={{
    background: mode === 'light'
      ? 'linear-gradient(to right, #74ebd5, #ACB6E5)'
      : 'linear-gradient(to right, #232526, #414345)',
    boxShadow: mode === 'light'
      ? '0 8px 24px rgba(0,0,0,0.2)'
      : '0 8px 24px rgba(0,0,0,0.5)',
    transition: 'box-shadow 0.3s ease',
  }}
>

      <Title mode={mode} />

      <Paper
    elevation={4}
    sx={{
      p: 4,
      borderRadius: 3,
      alignItems: "center",
      textAlign: 'center',
      minWidth: 500,
      bgcolor: mode === 'light'
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(18, 18, 18, 0.4)',
      backdropFilter: 'blur(10px)',
      border: mode === 'light'
        ? '1px solid rgba(255, 255, 255, 0.3)'
        : '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
      },
    }}
  >

        <motion.div
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h4" gutterBottom>
            Counter: {count}
          </Typography>
        </motion.div>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            onClick={increment}
            sx={{
              background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
              color: '#fff',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                background: 'linear-gradient(45deg, #2575fc, #6a11cb)',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              },
            }}
          >
            Increment
          </Button>

          <Button
            onClick={decrement}
            sx={{
              background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
              color: '#fff',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff4b2b, #ff416c)',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              },
            }}
          >
            Decrement
          </Button>

          <Button
            variant="outlined"
            onClick={reset}
            sx={{
              borderColor: '#fff',
              color: '#fff',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              '&:hover': {
                borderColor: '#fff',
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Counter;
