import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BaseCard from './Cards/BaseCard';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Avatar from './Avatar/Avatar';

const ProjectItem = (props) => {
  const { project } = props;
  const { name, img, tags, description } = project;
  const renderButtons = () => {
    return (
      <React.Fragment>
        <Button fullWidth variant="contained" color="primary">
          <FormattedMessage id="components.baseCard.action.demo" />
        </Button>
        <Button fullWidth variant="outlined">
          <FormattedMessage id="components.baseCard.action.code" />
        </Button>
      </React.Fragment>
    );
  };

  return (
    <BaseCard action renderActions={renderButtons}>
      <Avatar src={img} alt={name} />
      <Box my={3}>
        {tags &&
          tags.length &&
          tags.map((tag, index) => (
            <Box px={1} pl={index === 0 ? 0 : 1} key={tag} display="inline">
              <Typography component="span" variant="subtitle2">
                {tag}
              </Typography>
            </Box>
          ))}
      </Box>
      <Typography component="h3" variant="h5">
        {name}
      </Typography>
      <Box mt={2}>
        <Typography color="textSecondary">{description}</Typography>
      </Box>
    </BaseCard>
  );
};

export default ProjectItem;
