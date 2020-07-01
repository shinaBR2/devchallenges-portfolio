import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    width: '120px',
    paddingBottom: '62%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    overflow: 'hidden'
  },
  imgWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  }
}));

const ExperienceItem = (props) => {
  const { experience } = props;
  const { title, img, fromDate, toDate, description } = experience;
  const classes = useStyles();
  const duration = `${fromDate} - ${toDate}`;

  return (
    <React.Fragment>
      <Box style={{ width: '120px' }}>
        <div className={classes.wrapper}>
          <div className={classes.imgWrapper}>
            <img className={classes.img} alt={title} src={img} />
          </div>
        </div>
      </Box>
      <Box display="flex" flexWrap="wrap" flexGrow={1} pl={4}>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {duration}
          </Typography>
          <Typography component="h3" variant="subtitle2" color="textSecondary">
            {title}
          </Typography>
        </Grid>
        <Box mt={4}>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ExperienceItem;
