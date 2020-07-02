import React from 'react';
import Grid from '@material-ui/core/Grid';

import BaseCard from './BaseCard';
// import Avatar from '../Avatar/Avatar';

import { FormattedMessage } from 'gatsby-plugin-intl';
import ExperienceItem from '../ExperienceItem';

import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(4)
    }
  }
}));

const Experiences = (props) => {
  // const theme = useTheme();
  const classes = useStyles();
  const { experiences } = props;
  const isSM = useMediaQuery(props.theme.breakpoints.down('xs'));

  return (
    <BaseCard title={<FormattedMessage id="common.experiences" />}>
      <Grid container>
        {experiences &&
          experiences.length &&
          experiences.map((experience, index) => (
            <Grid
              key={experience.id}
              item
              container
              justify="space-between"
              xs={12}
              wrap="nowrap"
              index={index}
              spacing={isSM ? 2 : 4}
              className={classes.root}
            >
              <ExperienceItem experience={experience} />
            </Grid>
          ))}
      </Grid>
    </BaseCard>
  );
};

export default withTheme(Experiences);
