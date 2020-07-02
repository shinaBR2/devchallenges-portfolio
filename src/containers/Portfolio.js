import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Copyright from '../components/Copyright';
import Summary from '../components/Cards/Summary';
import BaseCard from '../components/Cards/BaseCard';
import TypicalBlog from '../components/Cards/TypicalBlog';
import Hobbies from '../components/Cards/Hobbies';
import Experiences from '../components/Cards/Experiences';
import ProjectItem from '../components/ProjectItem';
import Skills from '../components/Cards/Skills';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { getDummyPortfolio } from '../queries/portfolio';

const Portfolio = () => {
  const portfolioData = getDummyPortfolio();
  const {
    name,
    avatarURL,
    title,
    email,
    phone,
    description,
    skills,
    blogs,
    experiences,
    hobbies,
    projects
  } = portfolioData;
  const portfolio = {
    name,
    avatarURL,
    title,
    email,
    phone,
    description
  };
  const typicalBlog = blogs.filter((blog) => blog.typical)[0];
  const renderProject = () => {
    return (
      <React.Fragment>
        <BaseCard>
          <Typography component="h2" variant="h6">
            <FormattedMessage id="common.projects" />
          </Typography>
        </BaseCard>
        <Box mt={2}>
          <Grid container spacing={2}>
            {projects &&
              projects.length &&
              projects.map((project) => (
                <Grid key={project.id} item xs={12} sm={6} md={4}>
                  <ProjectItem project={project} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </React.Fragment>
    );
  };

  return (
    <Container maxWidth="md">
      <Summary portfolio={portfolio} />
      <Box display="flex" alignItems="flex-start" my={4}>
        <Box style={{ width: '40%' }}>
          <Skills skills={skills} />
          <Box mt={4}>
            <Hobbies hobbies={hobbies} />
          </Box>
        </Box>
        <Box style={{ width: '60%' }} pl={4}>
          <TypicalBlog blogData={typicalBlog} />
          <Box mt={4}>
            <Experiences experiences={experiences} />
          </Box>
        </Box>
      </Box>
      {renderProject()}
      <Box
        mt={12}
        mb={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Copyright />
      </Box>
    </Container>
  );
};

export default Portfolio;
