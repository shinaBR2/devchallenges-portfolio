import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import BaseCard from './BaseCard';
import Avatar from '../Avatar/Avatar';

import { FormattedMessage } from 'gatsby-plugin-intl';

const TypicalBlog = (props) => {
  const { blogData } = props;
  const { title, img, description, link } = blogData;

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
            <Avatar src={img} />
          </Grid>
          <Grid item xs={12}>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
        <Grid>
          <Link href={link} color="primary" target="_blank" rel="noopener">
            {link}
          </Link>
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default TypicalBlog;
