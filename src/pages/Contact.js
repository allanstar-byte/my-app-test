import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff6347;
  }
`;

const Address = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }
`;

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" required />
        </FormField>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      <Address>
        <p>Flower Farm</p>
        <p>123 Blossom Lane</p>
        <p>Nairobi, Kenya</p>
        <p>Email: info@flowerfarm.com</p>
        <p>Phone: +254 123 456 789</p>
      </Address>
      <SocialLinks>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;
