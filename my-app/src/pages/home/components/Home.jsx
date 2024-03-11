import React from "react";
import {
  Box, Grid, keyframes, Typography, Button
} from "@mui/material";
import PropTypes from 'prop-types';



const Home = ({ pageOne }) => {

  const maintext = keyframes`
 from {top: 20px;}
 to {top: 0px;}
 from {opacity: 0}
 to {opacity: 1}
`;

  const face = keyframes`
  from {opacity: 0}
  to {opacity: 1}
  `;

  const test = keyframes`
    from {
      opacity: 0;
      transform: scale(0, 0);
    }
    50% {
      opacity: 1;
      transform: scale(1.1, 1.1);
    }
    to {
      opacity: 1;
      transform: scale(1, 1);
    }
  `;

  return (
      <Box display="flex">
        <Box sx={{ width: 1, height: 1, }}>
          <Box sx={{ width: '90vw', height: '22vh', }}/>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={2}/>
            <Grid xs={4}>
              <Grid item>
              <Typography
                  sx={{
                    opacity: 0,
                    mr: 2,
                    fontSize: 30,
                    fontFamily: 'helvetica',
                    fontWeight: 500,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    position: 'relative',
                    animation: `${maintext} 0.91s`,
                    animationFillMode: 'forwards',
                    animationPlayState: 'running',
                    animationIterationCount: 1
                  }}
              >Hi! My name is <b>Braydon</b></Typography>
              </Grid>
              <Grid item>
                <Box sx={{ width: '1vw', height: '2vh', }}/>
              </Grid>
              <Grid item>
                <Typography
                    sx={{
                      opacity: 0,
                      mr: 2,
                      fontSize: 18,
                      fontFamily: 'helvetica',
                      fontWeight: 500,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      position: 'relative',
                      animation: `${maintext} 0.91s`,
                      animationFillMode: 'forwards',
                      animationPlayState: 'running',
                      animationDelay: '1s',
                    }}
                >I am currently an undergraduate Computer</Typography>
              </Grid>
              <Grid item>
                <Typography
                    sx={{
                      opacity: 0,
                      mr: 2,
                      fontSize: 18,
                      fontFamily: 'helvetica',
                      fontWeight: 500,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      position: 'relative',
                      animation: `${maintext} 0.91s`,
                      animationFillMode: 'forwards',
                      animationPlayState: 'running',
                      animationDelay: '0.91s',
                    }}
                >Science student at the University of Hawaii</Typography>
              </Grid>
              <Grid item>
                <Typography
                    sx={{
                      opacity: 0,
                      mr: 2,
                      fontSize: 18,
                      fontFamily: 'helvetica',
                      fontWeight: 500,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      position: 'relative',
                      animation: `${maintext} 0.91s`,
                      animationFillMode: 'forwards',
                      animationPlayState: 'running',
                      animationDelay: '1s',
                    }}
                >at Manoa, and I expect to graduate in 2024</Typography>
              </Grid>
              <Box sx={{ width: '1vw', height: '7vh', }}/>
              <Grid item>
                <Button variant="contained"
                        onClick={pageOne}
                    sx={{
                      opacity: 0,
                      width: '200px',
                      height: '50px',
                      left: '17%',
                      fontWeight: 'bold',
                      position: 'relative',
                      animation: `${test} 1s`,
                      animationFillMode: 'forwards',
                      animationPlayState: 'running',
                      animationDelay: '3.11s',
                    }}
                >LETS GO</Button>
              </Grid>
            </Grid>
            <Grid xs={6}>
              <Grid item style={{ display:"flex", justifyContent:"center", }}>
                <Box
                    component="img"
                    sx={{
                      opacity: 0,
                      width: '400px',
                      height: '400px',
                      left: '0%',
                      position: 'relative',
                      animation: `${face} 1.11s`,
                      animationFillMode: 'forwards',
                      animationPlayState: 'running',
                      animationDelay: '2s',
                    }}
                    src={require("../assets/Bread.png")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}

Home.propTypes = {
  pageOne: PropTypes.func.isRequired
}
export default Home;
