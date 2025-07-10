// src/components/contact-form.jsx
import { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 4px;
  background-color: #ffffff;
  color: ${({ theme }) => theme.text};
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 4px;
  background-color: #ffffff;
  color: ${({ theme }) => theme.text};
  resize: vertical;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add a temporary success message or animation trigger here
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Label htmlFor="message">Message:</Label>
      <Textarea
        name="message"
        id="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <Button type="submit">Send Message</Button>
    </FormWrapper>
  );
}
