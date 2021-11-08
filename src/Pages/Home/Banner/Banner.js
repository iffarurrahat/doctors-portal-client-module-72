import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
// import { Box } from '@mui/system';

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: 'left' }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Start Here
            </Typography>
            <Typography
              variant="h6"
              style={{ fontSize: 14, color: 'grey', fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              commodi non sint, deserunt tempora nisi maiores et totam saepe
              soluta!
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#53EDF7' }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: '350px' }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
