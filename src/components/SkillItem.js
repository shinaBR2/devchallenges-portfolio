import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(1),
    borderRadius: theme.shape.borderRadius
  },
  bar1Determinate: {
    borderRadius: theme.shape.borderRadius
  }
}));

const SkillItem = (props) => {
  const classes = useStyles();
  const { skill } = props;
  const { name, score } = skill;

  return (
    <Box
      display="flex"
      flexGrow={1}
      alignItems="center"
      justifyContent="space-between"
      mb={1}
    >
      <Typography variant="body2">{name}</Typography>
      <div style={{ width: '60%' }}>
        <LinearProgress
          classes={classes}
          color="primary"
          value={score}
          variant="determinate"
        />
      </div>
    </Box>
  );
};

export default SkillItem;
