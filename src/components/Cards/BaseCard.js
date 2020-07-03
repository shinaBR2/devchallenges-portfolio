import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const rootUseStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column'
  },
  content: {
    flex: 1
  }
});

const useStyles = makeStyles({
  root: {
    paddingBottom: '0'
  }
});

const BaseCard = (props) => {
  const { action = false, renderActions = null, title = '' } = props;
  const rootClasses = rootUseStyles();
  const classes = useStyles();

  return (
    <Card variant="outlined" className={rootClasses.root}>
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
      <CardContent className={rootClasses.content}>
        {props.children}
      </CardContent>
      {action && renderActions && <CardActions>{renderActions()}</CardActions>}
    </Card>
  );
};

export default BaseCard;
