import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const GalleryTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      <GalleryTitle>Our Flower Gallery</GalleryTitle>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;
