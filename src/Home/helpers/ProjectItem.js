import React from 'react';

const ProjectItem = ({ number, link, label }) => <p>{number}.<a style={{ marginLeft: '.5em' }} href={`/${link}`}>{label}</a></p>

export default ProjectItem;