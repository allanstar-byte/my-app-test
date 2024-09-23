import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #444;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  text-align: justify;
  color: #555;
  margin-bottom: 20px;
`;

const PrivacyNotice = () => {
  return (
    <PrivacyContainer>
      <Title>Privacy Notice</Title>
      <Section>
        <SectionTitle>Introduction</SectionTitle>
        <SectionContent>
          At Flower Farm, we value your privacy and are committed to protecting your personal information. This privacy notice explains how we collect, use, and share information about you when you visit our website.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Information We Collect</SectionTitle>
        <SectionContent>
          We collect information about you when you visit our website, including your IP address, browser type, and browsing behavior. We may also collect personal information that you provide to us, such as your name, email address, and phone number.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>How We Use Your Information</SectionTitle>
        <SectionContent>
          We use the information we collect to improve our website, provide customer service, and communicate with you about our products and services. We may also use your information to comply with legal obligations and protect our rights.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Sharing Your Information</SectionTitle>
        <SectionContent>
          We do not share your personal information with third parties, except as necessary to provide our services or comply with legal obligations. We may share aggregated or anonymized information that does not identify you.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Your Rights</SectionTitle>
        <SectionContent>
          You have the right to access, update, and delete your personal information. You can also object to the processing of your personal information or request that we restrict its processing. To exercise these rights, please contact us at privacy@flowerfarm.com.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionContent>
          If you have any questions or concerns about our privacy notice, please contact us at privacy@flowerfarm.com or at the following address: Flower Farm, Nairobi, Kenya.
        </SectionContent>
      </Section>
    </PrivacyContainer>
  );
};

export default PrivacyNotice;
