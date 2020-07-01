import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BaseCard from './Cards/BaseCard';
import { FormattedMessage } from 'gatsby-plugin-intl';

const ProjectItem = (props) => {
  const { project } = props;
  const { name, img, tags, description } = project;
  const renderButtons = () => {
    return (
      <React.Fragment>
        <Button size="small">
          <FormattedMessage id="components.baseCard.action.demo" />
        </Button>
        <Button size="small">
          <FormattedMessage id="components.baseCard.action.code" />
        </Button>
      </React.Fragment>
    );
  };

  return (
    <BaseCard action renderActions={renderButtons}>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        {tags &&
          tags.length &&
          tags.map((tag) => <Typography key={tag}>{tag}</Typography>)}
      </div>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
    </BaseCard>
  );
};

export default ProjectItem;
