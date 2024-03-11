import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Project = ({title, sub, description, image, url}) => {

  return (
      <Card sx={{
        width: '600px',
      }}
            style={{
              color: "#FFFFFF",
              backgroundColor: "#003366",
            }}
      >
        <CardActionArea href={url}>
          <CardMedia
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
              src={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 13 }} color="inherit">
              {sub}
            </Typography>
            <Typography variant="body2" color="inherit">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

Project.propTypes = {
  title: PropTypes.object.isRequired,
  sub: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
};
export default Project