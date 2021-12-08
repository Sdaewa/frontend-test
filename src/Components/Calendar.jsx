import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ActionModal from './ActionModal';
import { getSlots } from '../slice';

const theme = createTheme();

const Calendar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { slots } = useSelector((state) => state.slots);
  let today = new Date().toLocaleString().split(',')[0];

  useEffect(() => {
    dispatch(getSlots());
  }, [dispatch]);

  const message = (date, status) => {
    if ((today >= date && status === 'closed') || status === 'open') {
      return <Typography>{t('You have a gift!')}</Typography>;
    } else if (status === 'empty') {
      return <Typography>{t('Empty!')}</Typography>;
    }
    if (today < date) {
      return <Typography>{t('Happy Holidays!')}</Typography>;
    }
  };
  const shuffled = [...slots].sort(() => Math.random() - 0.5);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="sm">
          <Grid container spacing={4}>
            {shuffled.map((slot) => (
              <Grid item key={slot.day} xs={12} sm={6} md={4} justifyContent="center">
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography textAlign="center" gutterBottom variant="h3" component="h2">
                      {slot.day}
                    </Typography>
                    <Divider
                      style={{
                        marginBottom: '15px',
                      }}
                    />
                    <Typography textAlign="center">{message(slot.date, slot.status)}</Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      justifyContent: 'center',
                    }}
                  >
                    <ActionModal date={slot.date} day={slot.day} status={slot.status} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Calendar;
