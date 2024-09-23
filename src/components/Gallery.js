import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from './Lightbox';

const GalleryContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const GalleryTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
	"https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400"
  ];

  const openLightbox = (src) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <GalleryContainer>
      <GalleryTitle>Our Gallery</GalleryTitle>
      <Grid>
        {images.map((src, index) => (
          <ImageWrapper key={index} onClick={() => openLightbox(src)}>
            <Image src={src} alt={`Flower ${index + 1}`} />
          </ImageWrapper>
        ))}
      </Grid>
      {lightboxImage && (
        <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />
      )}
    </GalleryContainer>
  );
};

export default Gallery;
