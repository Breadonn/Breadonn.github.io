import React, { useState } from "react";
import {
  Container
} from "@mui/material";
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

const HomePage = () => {

  // eslint-disable-next-line
  const [page, setPage] = useState(0);

  return (
      <Container maxWidth={false} maxHeight='100vh' disableGutters>
        <NavBar
            pageZero={() => setPage(0)}
          pageOne={() => setPage(1)}
          pageTwo={() => setPage(2)}
        />
        {page === 0 && (
            <Home pageOne={() => setPage(1)}
                style={{
              color: "#FFFFFF",
              backgroundColor: "#292b2c",
            }}
            />
        )}
        {page === 1 && (
            <AboutMe/>
        )}
        {page === 2 && (
          <Projects/>
        )}
      </Container>
  );
}
export default HomePage;
