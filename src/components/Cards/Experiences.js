import React from 'react';
import Grid from '@material-ui/core/Grid';

import BaseCard from './BaseCard';
// import Avatar from '../Avatar/Avatar';

import { FormattedMessage } from 'gatsby-plugin-intl';
import ExperienceItem from '../ExperienceItem';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4)
    /* '&:first-child': {
      marginTop: 0
    } */
  }
}));

const Experiences = (props) => {
  const { experiences } = props;
  const classes = useStyles();

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
              className={classes.root}
            >
              <ExperienceItem experience={experience} />
            </Grid>
          ))}
      </Grid>
    </BaseCard>
  );
};

export default Experiences;
