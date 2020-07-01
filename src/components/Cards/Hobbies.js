import React from 'react';
import Grid from '@material-ui/core/Grid';

import BaseCard from './BaseCard';
import HobbyItem from '../HobbyItem';

import { FormattedMessage } from 'gatsby-plugin-intl';

const Hobbies = (props) => {
  const { hobbies } = props;

  return (
    <BaseCard title={<FormattedMessage id="common.hobbies" />}>
      <Grid container>
        {hobbies &&
          hobbies.length &&
          hobbies.map((hobby, index) => (
            <Grid key={hobby.id} item xs={12}>
              <HobbyItem hobby={hobby} index={index} />
            </Grid>
          ))}
      </Grid>
    </BaseCard>
  );
};

export default Hobbies;
