import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const HomeContainer = styled.div`
  font-family: 'Arial', sans-serif;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
`;

const HeroSection = styled.section`
  background: url('https://via.placeholder.com/1920x800') no-repeat center center/cover;
  color: #fff;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

const HeroSubtitle = styled.p`
  font-size: 1.75rem;
  margin-bottom: 30px;
  max-width: 600px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
`;

const HeroButton = styled(Link)`
  padding: 15px 30px;
  background-color: #ff6347;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #e5533e;
    transform: scale(1.05);
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const SectionContent = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturedProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin: 15px 0;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  padding: 0 15px 15px;
`;

const ProductButton = styled(Link)`
  display: block;
  padding: 10px;
  background-color: #ff6347;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  margin: 0 15px 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5533e;
  }
`;

const PartnersSection = styled.section`
  padding: 80px 20px;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const PartnersTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const PartnersScroller = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 0;
  animation: scroll 30s linear infinite;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const PartnerLogo = styled.img`
  height: 100px;
  width: auto;
  margin: 0 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CallToAction = styled.section`
  background-color: #ff6347;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
`;

const CallToActionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const CallToActionButton = styled(Link)`
  padding: 15px 30px;
  background-color: #fff;
  color: #ff6347;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>Welcome to Flower Farm</HeroTitle>
        <HeroSubtitle>Where beauty blooms with every petal</HeroSubtitle>
        <HeroButton to="/contact">Get in Touch</HeroButton>
      </HeroSection>

      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionContent>
          At Flower Farm, we are passionate about bringing the finest flowers to your home. Established in 2010, our
          farm has been dedicated to growing a diverse range of beautiful blooms, all cultivated with care and attention.
          Discover our story and learn more about our mission to spread joy through flowers.
        </SectionContent>
        <HeroButton to="/about">Learn More</HeroButton>
      </Section>

      <FeaturedProducts>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/300x200" alt="Elegant Roses" />
          <ProductTitle>Elegant Roses</ProductTitle>
          <ProductDescription>
            A bouquet of premium roses, perfect for any occasion.
          </ProductDescription>
          <ProductButton to="/contact">Order Now</ProductButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/300x200" alt="Vibrant Lilies" />
          <ProductTitle>Vibrant Lilies</ProductTitle>
          <ProductDescription>
            Bright and colorful lilies to brighten up your day.
          </ProductDescription>
          <ProductButton to="/contact">Order Now</ProductButton>
        </ProductCard>
      </FeaturedProducts>

      <PartnersSection>
        <PartnersTitle>Our Partners</PartnersTitle>
        <PartnersScroller>
          <PartnerLogo src="https://via.placeholder.com/150x100" alt="Partner 1" />
          <PartnerLogo src="https://via.placeholder.com/150x100" alt="Partner 2" />
          <PartnerLogo src="https://via.placeholder.com/150x100" alt="Partner 3" />
          <PartnerLogo src="https://via.placeholder.com/150x100" alt="Partner 4" />
          <PartnerLogo src="https://via.placeholder.com/150x100" alt="Partner 5" />
          <PartnerLogo src="https://via.placeholder.com/150x100" alt="Partner 6" />
          {/* Repeat logos as needed for smooth scrolling */}
        </PartnersScroller>
      </PartnersSection>

      <CallToAction>
        <CallToActionTitle>Ready to Experience the Beauty of Flowers?</CallToActionTitle>
        <CallToActionButton to="/contact">Contact Us Today</CallToActionButton>
      </CallToAction>
    </HomeContainer>
  );
};

export default Home;
