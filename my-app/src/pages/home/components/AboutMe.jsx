import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const AboutMe = () => {

  return (
      <Box display="flex">
        <Box sx={{ width: 1, height: 1, overflow: 'hidden' }} style={{ color: "#FFFFFF", backgroundColor: "#292b2c", }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={2}/>
            <Grid xs={4}>
              <Box sx={{ width: '90vw', height: '10vh', }}/>
              <Typography sx={{fontSize: 14, fontFamily: 'helvetica',}}>My journey began during my final year of high school where I decided to take AP Computer Science on what was essentially a whim. Little did I know, that decision would determine the path that I would take from that point onward. I learned the basics of coding in Java and enjoyed it so much I dived straight into studying Computer Science at the University of Hawaii at Manoa.</Typography>
              <Box sx={{ height: "1vh" }}/>
              <Typography sx={{fontSize: 14, fontFamily: 'helvetica',}}>I am a software developer who has experience dealing with full stack development, but has a heavy interest in front end development and design. For full stack development I am most familiar with the MERN stack. I have also dipped my toes into mobile development with Flutter. </Typography>
              <Box sx={{ height: "1vh" }}/>
              <Box sx={{ height: "5vh" }}/>
              <Typography sx={{fontSize: 30, fontWeight: "bold", fontFamily: 'helvetica'}}>Skills</Typography>
              <Box sx={{ height: "5vh" }}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/React-icon.svg.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/1_bc9pmTiyKR0WNPka2w3e0Q.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/expressjs_logo_icon_169185.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/javascript-js-icon-2048x2048-nyxvtvk0.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/mongodb-logo-D13D67C930-seeklogo.com.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/html.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/css.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/flutter.png")}/>
              <Box component="img" sx={{ width: '50px', height: '50px', padding: "15px"}} src={require("../assets/skill_icons/github icon.png")}/>
            </Grid>
            <Grid xs={6}>
              <Box sx={{ width: '90vw', height: '22vh', }}/>
              <Grid item style={{ display:"flex", justifyContent:"center", }}>
                <Box component="img" sx={{ width: '400px', height: '400px', }} src={require("../assets/Bread.png")}/>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default AboutMe