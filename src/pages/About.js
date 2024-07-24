import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Highlight = styled.span`
  color: #ff6347;
  font-weight: bold;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  color: #555;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <SectionContent>
          Welcome to <Highlight>Flower Farm</Highlight>, where our love for flowers blossomed into a thriving business.
          Established in 2010 in the picturesque fields of Nairobi, Kenya, our journey began with a passion for
          cultivating the most beautiful and diverse range of flowers. Over the years, we have grown from a small family
          farm to a leading supplier of high-quality flowers, renowned for their vibrant colors and exceptional freshness.
        </SectionContent>
      </Section>
      <Image src="https://via.placeholder.com/600" alt="Flower Farm" />
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <SectionContent>
          At Flower Farm, our mission is to bring the beauty of nature into every home and occasion. We are committed to
          sustainable farming practices, ensuring that our flowers are grown with the utmost care for the environment and
          our community. Our dedicated team works tirelessly to provide our customers with the freshest and most
          exquisite flowers, making every moment special.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <SectionContent>
          We take pride in our:
          <List>
            <ListItem><Highlight>Quality:</Highlight> Our flowers are handpicked and carefully inspected to ensure the highest standards.</ListItem>
            <ListItem><Highlight>Variety:</Highlight> From roses to lilies, and exotic blooms, we offer a wide range of flowers to suit every taste.</ListItem>
            <ListItem><Highlight>Service:</Highlight> Our friendly and knowledgeable staff are always ready to assist you with your floral needs.</ListItem>
            <ListItem><Highlight>Sustainability:</Highlight> We use eco-friendly farming techniques to minimize our environmental impact.</ListItem>
          </List>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Meet the Team</SectionTitle>
        <SectionContent>
          Our team is the heart of Flower Farm. Each member brings their unique expertise and passion for flowers, creating
          a vibrant and dedicated community. From our skilled farmers to our creative floral designers, every person at
          Flower Farm plays a vital role in delivering the best to our customers.
        </SectionContent>
      </Section>
      <Image src="https://via.placeholder.com/600" alt="Our Team" />
    </AboutContainer>
  );
};

export default About;
