import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Typography, AppBar, CssBaseline, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Calendar from './Components/Calendar';
//   const { t } = useTranslation();
//   return <Typography>{t('happyHolidays')}</Typography>;

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Calendar
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Calendar />
      </main>
    </ThemeProvider>
  );
};

export default App;
