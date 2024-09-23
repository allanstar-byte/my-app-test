import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterSection = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const FooterTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  ${'' /* color: #ff6347; */}
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }
`;

const SocialMedia = styled.div`
  margin: 20px 0;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }
`;

const NewsletterSection = styled.div`
  margin: 20px 0;
`;

const NewsletterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  flex: 1;
  background-color: #333;
  color: #fff;

  &::placeholder {
    color: #aaa;
  }
`;

const NewsletterButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5533e;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding: 20px 0;
  font-size: 0.875rem;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Rift Valley Roses</FooterTitle>
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLinks>
        <SocialMedia>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </SocialIcon>
        </SocialMedia>
        <NewsletterSection>
          <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your email address" required />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>
      </FooterSection>
      <FooterBottom>
        &copy; {new Date().getFullYear()} Rift Valley Roses | All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
