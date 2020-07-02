import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import BaseCard from './BaseCard';
import Avatar from '../Avatar/Avatar';

const Summary = (props) => {
  const { portfolio } = props;
  const { name, avatarURL, title, email, phone, description } = portfolio;

  return (
    <BaseCard>
      <Grid container wrap="nowrap">
        <Grid item container xs={3}>
          <Avatar alt={name} src={avatarURL} width="100%" />
        </Grid>
        <Grid item container xs={9}>
          <Box pl={3}>
            <Grid item container justify="space-between" xs={12}>
              <div>
                <Box fontWeight="fontWeightBold">
                  <Typography variant="h5" component="h2">
                    {name}
                  </Typography>
                </Box>
                <Typography color="textSecondary" component="h3">
                  {title}
                </Typography>
              </div>
              <div>
                <Box display="flex" alignItems="center" mb={1}>
                  <EmailIcon />
                  <Box ml={1}>
                    <Typography color="textSecondary">{email}</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <PhoneIcon />
                  <Box ml={1}>
                    <Typography color="textSecondary">{phone}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Box mt={5}>
              <Typography color="textSecondary">{description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default Summary;
