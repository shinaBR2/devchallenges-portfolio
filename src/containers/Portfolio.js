import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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
          <FormattedMessage id="common.projects" />
        </BaseCard>
        {projects &&
          projects.length &&
          projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
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
      <Copyright />
    </Container>
  );
};

export default Portfolio;
