import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
// import { useTheme } from '@material-ui/core/styles';

import BaseCard from './BaseCard';
import Avatar from '../Avatar/Avatar';

const useStyles = makeStyles((theme) => ({
  contactBox: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: theme.spacing(4)
    }
  }
}));

const Summary = (props) => {
  const classes = useStyles();
  const { portfolio } = props;
  const { name, avatarURL, title, email, phone, description } = portfolio;

  return (
    <BaseCard>
      <Grid container spacing={3}>
        <Grid item container xs={12} sm={6} md={3}>
          <Avatar alt={name} src={avatarURL} width="100%" />
        </Grid>
        <Grid item container xs={12} sm={6} md={9}>
          <Grid item container justify="space-between" xs={12}>
            <div>
              <Box fontWeight="fontWeightBold">
                <Typography align="left" variant="h5" component="h2">
                  {name}
                </Typography>
              </Box>
              <Typography align="left" color="textSecondary" component="h3">
                {title}
              </Typography>
            </div>
            <div className={classes.contactBox}>
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
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default Summary;
