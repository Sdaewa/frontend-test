import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { useTranslation } from 'react-i18next';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getSlots } from '../slice';

// const slots = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
//   28, 29, 30, 31,
// ];

const theme = createTheme();

const Calendar = () => {
  const dispatch = useDispatch();
  const { slots } = useSelector((state) => state.slots);

  useEffect(() => {
    dispatch(getSlots());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="sm">
          <Grid container spacing={4}>
            {slots &&
              slots.map((slot) => (
                <Grid item key={slot} xs={12} sm={8} md={2}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {slot.day}
                      </Typography>
                      <Typography>Some text</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Open</Button>
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
