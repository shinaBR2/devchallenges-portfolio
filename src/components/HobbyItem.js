import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: (props) => ({
    position: 'relative',
    width: props.width ? props.width : '100%',
    paddingBottom: props.width ? props.width : '37%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    overflow: 'hidden'
  }),
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

const HobbyItem = (props) => {
  const { hobby, index } = props;
  const { name, img, description } = hobby;
  const classes = useStyles(props);

  return (
    <Box mt={index === 0 ? 0 : 4}>
      <div className={classes.wrapper}>
        <div className={classes.imgWrapper}>
          <img className={classes.img} alt={name} src={img} />
        </div>
      </div>
      <Typography variant="h6" component="h3">
        {name}
      </Typography>
      <Typography color="textSecondary">{description}</Typography>
    </Box>
  );
};

export default HobbyItem;
