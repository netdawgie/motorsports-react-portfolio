// src/components/project-card.jsx
import styled from 'styled-components';
import TagBadge from './tag-badge';

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #d8d8d8;
  color: #272727;
  border: 1px solid #272727;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.67);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.75);
    transform: translateY(-2px);
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 125px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ProjectImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const Content = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const Title = styled.h3`
  color: #272727;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 0.75rem;
`;

const TagSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const TagLabel = styled.span`
  font-weight: bold;
  color: #272727;
  margin-right: 0.5rem;
`;

export default function ProjectCard({ title, description, tags, image }) {
  return (
    <Card>
      <ImageWrapper>
        <ProjectImage src={image} alt={`${title} preview`} />
      </ImageWrapper>

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <TagSection>
          <TagLabel>Tags:</TagLabel>
          {tags.map((tag, index) => (
            <TagBadge key={index} label={tag} />
          ))}
        </TagSection>
      </Content>
    </Card>
  );
}
