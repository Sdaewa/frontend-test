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
// import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ActionModal from './ActionModal';
import { getSlots } from '../slice';

const theme = createTheme();

const Calendar = () => {
  const dispatch = useDispatch();
  const { slots } = useSelector((state) => state.slots);
  let today = new Date().toLocaleString().split(',')[0];

  useEffect(() => {
    dispatch(getSlots());
  }, [dispatch]);

  const message = (date, status) => {
    if ((today >= date && status === 'closed') || status === 'open') {
      return 'You have a gift!';
    } else if (today >= date && status === 'empty') {
      return 'Empty';
    }
    if (today < date) {
      return 'Happy Holidays!';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="sm">
          <Grid container spacing={4}>
            {slots.map((slot) => (
              <Grid item key={slot.day} xs={12} sm={6} md={4} justifyContent="center">
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography textAlign="center" gutterBottom variant="h3" component="h2">
                      {slot.day}
                    </Typography>
                    <Divider />
                    <Typography textAlign="center">{message(slot.date, slot.status)}</Typography>
                  </CardContent>
                  <CardActions>
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
