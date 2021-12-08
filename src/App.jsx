import React from 'react';
import { Container, Card, CssBaseline, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SnowStorm from 'react-snowstorm';
import Calendar from './Components/Calendar';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        style={{
          backgroundColor: '#92140c',
        }}
      >
        <SnowStorm />
        <main>
          <Card
            style={{
              padding: '1rem',
              margin: ' 1rem',
              boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: ' 6px',
              backgroundColor: '#001514',
            }}
          >
            <Calendar />
          </Card>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
