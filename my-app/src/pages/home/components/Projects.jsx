import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Project from '../components/Project'

const Projects = () => {

  return (
      <Box height="100vh" display="flex">
        <Box sx={{ width: 1, height: 1 }} style={{ color: "#FFFFFF", backgroundColor: "#292b2c", }}>
          <Box sx={{ width: '90vw', height: '5vh', }}/>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12} item style={{ display: "flex", justifyContent: "center", }}>
              <Typography
                  sx={{
                    mr: 2,
                    fontSize: 50,
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    color: 'inherit',
                  }}
              >PROJECTS</Typography>
            </Grid>
            <Box sx={{ width: '90vw', height: '5vh', }}/>
            <Grid item xs={6} style={{ display: "flex", justifyContent: "center", }}>
              <Project title="Breadonn's Star Rail Character Guide - 2024"
                       sub="Design | Google Sheets"
                       description="A Spreadsheet based compendium detailing how to equip characters in the online game Honkai: Star Rail. It contains general information, team recommendations, detailed synergy explanations, and sample teams for endgame game modes. Experimented with Spreadsheet design and functionality with a focus on research and visual appeal."
                       image={require("../assets/project_covers/Character Data Sheet.png")}
                       url="https://docs.google.com/spreadsheets/d/1qiGotl4SU0HoLNyX2E-mfSNJvOTmVwplcSOP7iXoXLk/edit?usp=sharing"></Project>
            </Grid>
            <Grid item xs={6} style={{ display: "flex", justifyContent: "center", }}>
              <Project title="PickOn Software - 2023"
                       sub="React | ExpressJS | Node.js | MongoDB | Material UI | Socket.IO"
                       description="PickOn is an open source project dedicated to helping instructors make the classroom more interesting and engaging in order to enhance the learning experience. I worked in a team of 2 to develop the initial design and functionality of the software."
                       image={require("../assets/project_covers/PickOn.png")}
                       url="https://github.com/Breadonn/PickOn_Project"></Project>
            </Grid>
            <Box sx={{ width: '90vw', height: '2vh', }}/>
            <Grid item xs={6} style={{ display: "flex", justifyContent: "center", }}>
              <Project title="PetBite - 2023"
                       sub="Dart | Flutter | Firebase"
                       description="PetBite is a flutter based mobile application built to promote pet health. Owners can use the app to schedule feeding times, log information, and get recommendations on their pet's health status. I worked in a team of three to develop a very early version of the app. This was my first experience with Flutter and mobile development as a whole."
                       image={require("../assets/project_covers/PetBite.png")}
                       url="https://github.com/PetBite/app"></Project>
            </Grid>
            <Grid item xs={6} style={{ display: "flex", justifyContent: "center", }}>
              <Project title="HaccHui Revamped - 2023"
                       sub="React | Meteor | Node.js | MongoDB | React Bootstrap"
                       description="Iterating on an existing website, I worked in a team of 7 to revamp the website for the Hawaii Annual Code Challenge (HACC). This project gave me experience working in a large group with people that I didn't know too well. Converted elements from Semantic UI to Boostrap, updated code, and improved on design."
                       image={require("../assets/project_covers/HaccHui.png")}
                       url="https://github.com/hh-t1/hacc-hui-revamped"></Project>
            </Grid>
            <Box sx={{ width: '90vw', height: '2vh', }}/>
            <Grid item xs={6} style={{ display: "flex", justifyContent: "center", }}>
              <Project title="Hawaii Annual Code Challenge - 2021"
                       sub="React | Meteor | Node.js | MongoDB | Semantic UI React"
                       description="Back in 2021 I participated in the Hawaii Annual Code Challenge and made it to the final round of competition. The project my team worked on was a react app utilizing Google's DialogFlow API to implement an interactive chatbot to answer questions on behalf of the Office of Hawaiian Affairs."
                       image={require("../assets/project_covers/CatBot.png")}
                       url="https://github.com/catjams/catbot"></Project>
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default Projects