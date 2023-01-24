import React from 'react';
import ProjectItem from '../helpers/ProjectItem';
import { PROJECT_LIST } from '../Home.constants';

import '../Home.scss';

const ProjectList = () => {
  return (
    <div className='project_list'>
      <ol>
        {PROJECT_LIST.map((project, idx) => <ProjectItem
          number={idx + 1}
          label={project.label}
          link={project.link}
        />)}
      </ol>
    </div>
  );
}

export default ProjectList;