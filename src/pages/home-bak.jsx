// src/pages/home.jsx
import { useState } from 'react';
import PageWrapper from '../components/page-wrapper';
import ProjectCard from '../components/project-card';
import ProjectFilter from '../components/project-filter';
import { projects } from '../data/projects';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState('all');

  // Filter projects by selected tag
  const filteredProjects =
    selectedTag === 'all'
      ? projects
      : projects.filter(project =>
          project.tags.includes(selectedTag)
        );

  // Available tags for filter dropdown
  const availableTags = ['Analytics', 'Content', 'Dashboard', 'Driver', 'Engagement', 'Event', 'Fan', 'HPDE', 'Insights', 'Marketing', 'Media', 'Performance', 'Scheduler', 'Statistics', 'Telemetry', 'Team', 'Track Days'];

  return (
    <PageWrapper>
      <h1>🏁 App Dev Ideation for Motorsports-Related Activities</h1>
      <ProjectFilter
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        availableTags={availableTags}
      />

      {filteredProjects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </PageWrapper>
  );
}

