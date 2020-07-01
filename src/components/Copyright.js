import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Copyright = () => {
  return (
    <div>
      <Typography>
        <FormattedMessage id="common.copyright" />
      </Typography>
    </div>
  );
};

export default Copyright;
