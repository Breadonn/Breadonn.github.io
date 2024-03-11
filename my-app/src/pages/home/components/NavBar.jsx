import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import PropTypes from "prop-types";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const NavBar = ({ pageZero, pageOne, pageTwo }) => {


  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
                component="img"
                sx={{
                  width: '50px',
                  height: '50px',
                }}
                src={require("../assets/Bread.png")}
            />
            <Box style={{ width: "20px" }}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                onClick={pageZero}
            >
              Braydon
            </Typography>
            <Box style={{ width: "51vw" }}/>
            <Button
            onClick={pageOne}
            style={{
              color: "#FFFFFF",
            }}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              About me
            </Button>
            <Box style={{ width: "1vw" }}/>
            <Button
                onClick={pageTwo}
                style={{
                  color: "#FFFFFF",
                }}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
            >
              Projects
            </Button>
            <Box style={{ width: "1vw" }}/>
            <Button
                href="https://drive.google.com/file/d/1PDUmfZ4vm0ySS7MDD4IK2IW0mrT1RQ9G/view?usp=sharing"
                style={{
                  color: "#FFFFFF",
                }}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
            >
              Resume
            </Button>
            <Box sx={{ width: "48px" }}/>
            <IconButton href="https://github.com/Breadonn"><GitHubIcon/></IconButton>
            <IconButton href="https://www.linkedin.com/in/braydonnagasako/"><LinkedInIcon/></IconButton>
            <IconButton href="mailto:breadonll@gmail.com"><MailIcon/></IconButton>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

NavBar.propTypes = {
  pageZero: PropTypes.func.isRequired,
  pageOne: PropTypes.func.isRequired,
  pageTwo: PropTypes.func.isRequired,
};

export default NavBar