// src/pages/contact.jsx
import PageWrapper from '../components/page-wrapper';
import ContactForm from '../components/contact-form';
import GitHubActivity from '../components/github-activity';

export default function Contact() {
  return (
    <PageWrapper>
      <h2>📮 Contact Me</h2>
      <p>
        Have a question, want to collaborate, or just want to talk motorsports?
        Send me a message below.
      </p>

      <ContactForm />

      <h2>📦 GitHub Activity</h2>
      <GitHubActivity />
    </PageWrapper>
  );
}
