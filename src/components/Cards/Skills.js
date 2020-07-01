import React from 'react';
import Grid from '@material-ui/core/Grid';

import BaseCard from './BaseCard';
// import Avatar from '../Avatar/Avatar';

import { FormattedMessage } from 'gatsby-plugin-intl';
import SkillItem from '../SkillItem';

const Skills = (props) => {
  const { skills } = props;

  return (
    <BaseCard title={<FormattedMessage id="common.frontend" />}>
      <Grid container>
        {skills &&
          skills.length &&
          skills.map((skill) => (
            <Grid
              key={skill.id}
              item
              container
              alignItems="center"
              justify="space-between"
              xs={12}
            >
              <SkillItem skill={skill} />
            </Grid>
          ))}
      </Grid>
    </BaseCard>
  );
};

export default Skills;
