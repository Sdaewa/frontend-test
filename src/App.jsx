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
      <main>
        <Calendar />
      </main>
    </ThemeProvider>
  );
};

export default App;
