// src/components/tag-badge.jsx
import styled from 'styled-components';

const Badge = styled.span`
  background-color: ${({ theme }) => theme.accent};
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  margin: 0.25rem;
  display: inline-block;
`;

export default function TagBadge({ label }) {
  return <Badge>{label}</Badge>;
}

