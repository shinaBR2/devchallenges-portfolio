import React from 'react';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
// import { useTheme } from '@material-ui/core/styles';
// import BaseCard from './BaseCard';

const useStyles = makeStyles({
  root: {
    paddingBottom: '0'
  }
});

const BaseCard = (props) => {
  const { action = false, renderActions = null, title = '' } = props;
  const classes = useStyles();

  return (
    <Card variant="outlined">
      {title && (
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: 'h5',
            component: 'h2'
          }}
          classes={classes}
        />
      )}
      <CardContent>{props.children}</CardContent>
      {action && renderActions && <CardActions>{renderActions()}</CardActions>}
    </Card>
  );
};

export default BaseCard;
