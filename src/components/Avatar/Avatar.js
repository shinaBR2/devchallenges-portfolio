import React from 'react';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
// import { useTheme } from '@material-ui/core/styles';
// import BaseCard from './BaseCard';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    position: 'relative',
    width: props.width ? props.width : '100%',
    paddingBottom: props.width ? props.width : '100%',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden'
  }),
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));

const Avatar = (props) => {
  const classes = useStyles(props);
  const { src, alt = 'avatar' } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img className={classes.img} alt={alt} src={src} />
      </div>
    </div>
  );
};

export default Avatar;
