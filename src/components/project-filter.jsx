// src/components/project-filter.jsx
import styled from 'styled-components';

const FilterWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const Select = styled.select`
  background-color: #ffffff;
  color: ##111111;
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
`;

export default function ProjectFilter({ selectedTag, onTagChange, availableTags }) {
  return (
    <FilterWrapper>
      <Label htmlFor="tag-select">Filter Projects:</Label>
      <Select
        id="tag-select"
        value={selectedTag}
        onChange={(e) => onTagChange(e.target.value)}
      >
        <option value="all">All</option>
        {availableTags.map((tag, i) => (
          <option key={i} value={tag}>
            {tag}
          </option>
        ))}
      </Select>
    </FilterWrapper>
  );
}
