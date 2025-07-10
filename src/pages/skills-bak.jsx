// src/pages/skills.jsx
import PageWrapper from '../components/page-wrapper';
import TagBadge from '../components/tag-badge';
import styled from 'styled-components';

export const StyledLink = styled.a`
  color: #272727;
  text-decoration: underline;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Skills() {
  const devSkills = [
    'HTML5',
    'CSS',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe After Effects',
    'Adobe Premiere Pro',
  ];

  const motorsportsFocus = [
    'Telemetry Visualization',
    'Fan Engagement Apps',
    'Dashboard Design',
    'Event Data Aggregation',
  ];

  return (
    <PageWrapper>
      <h2>🧑‍💻 Developer Skills</h2>
      <p>
        From photography to video and motion graphics production to website design and development, my skillset focus is on multiple aspects of visual communication.&nbsp;&nbsp;This React app demostration is part of my continuing journey in learning web app development.
      </p>
      <p>To learn more about my work experience and my skillset, please <StyledLink href="https://linkedin.com/in/scotthinson" target="_blank" rel="noopener noreferrer">visit my LinkedIn page</StyledLink></p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {devSkills.map((skill, index) => (
          <TagBadge key={index} label={skill} />
        ))}
      </div>

      <h2>🏁 Motorsports-Focused Capabilities</h2>
      <p>
        I blend industry context with hands-on code—here are areas where I apply technical skills
        to solve motorsports-specific challenges:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {motorsportsFocus.map((item, index) => (
          <TagBadge key={index} label={item} />
        ))}
      </div>
    </PageWrapper>
  );
}
