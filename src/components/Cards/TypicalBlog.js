import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import BaseCard from './BaseCard';

import { FormattedMessage } from 'gatsby-plugin-intl';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '90%',
    borderRadius: theme.shape.borderRadius,
    overflow: 'visible'
  },
  imgWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    left: theme.spacing(4)
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));

const TypicalBlog = (props) => {
  const { blogData } = props;
  const { title, img, description, link } = blogData;
  const classes = useStyles();

  return (
    <BaseCard>
      <Grid container>
        <Grid container>
          <Grid item xs={4}>
            <Typography
              paragraph
              variant="body2"
              component="h2"
              color="textSecondary"
            >
              <FormattedMessage id="common.blog" />
            </Typography>
            <Typography component="h3" variant="h5">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.wrapper}>
              <div className={classes.imgWrapper}>
                <img className={classes.img} alt={title} src={img} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography>{description}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Link href={link} color="primary" target="_blank" rel="noopener">
            {link}
          </Link>
        </Box>
      </Grid>
    </BaseCard>
  );
};

export default TypicalBlog;
