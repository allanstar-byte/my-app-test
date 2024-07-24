import React from 'react';
import styled from 'styled-components';

const FlowersContainer = styled.div`
  padding: 80px 20px;
  background-color: #f9f9f9;
`;

const FlowersTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const FlowersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const FlowerCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const FlowerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const FlowerTitle = styled.h3`
  font-size: 1.5rem;
  margin: 15px 0;
  color: #333;
`;

const FlowerDescription = styled.p`
  font-size: 1rem;
  color: #666;
  padding: 0 15px 15px;
`;

const Flowers = () => {
  const flowerData = [
    {
      id: 1,
      name: "Elegant Roses",
      image: "https://via.placeholder.com/250x200",
      description: "A bouquet of premium roses, perfect for any occasion."
    },
    {
      id: 2,
      name: "Vibrant Lilies",
      image: "https://via.placeholder.com/250x200",
      description: "Bright and colorful lilies to brighten up your day."
    },
    {
      id: 3,
      name: "Serene Tulips",
      image: "https://via.placeholder.com/250x200",
      description: "Delicate tulips that add a touch of elegance to any space."
    },
    {
      id: 4,
      name: "Sunny Sunflowers",
      image: "https://via.placeholder.com/250x200",
      description: "Bold and cheerful sunflowers to bring sunshine to your home."
    },
	{
		id: 1,
		name: "Elegant Roses",
		image: "https://via.placeholder.com/250x200",
		description: "A bouquet of premium roses, perfect for any occasion."
	  },
	  {
		id: 2,
		name: "Vibrant Lilies",
		image: "https://via.placeholder.com/250x200",
		description: "Bright and colorful lilies to brighten up your day."
	  },
	  {
		id: 3,
		name: "Serene Tulips",
		image: "https://via.placeholder.com/250x200",
		description: "Delicate tulips that add a touch of elegance to any space."
	  },
	  {
		id: 4,
		name: "Sunny Sunflowers",
		image: "https://via.placeholder.com/250x200",
		description: "Bold and cheerful sunflowers to bring sunshine to your home."
	  },
	  {
		id: 1,
		name: "Elegant Roses",
		image: "https://via.placeholder.com/250x200",
		description: "A bouquet of premium roses, perfect for any occasion."
	  },
	  {
		id: 2,
		name: "Vibrant Lilies",
		image: "https://via.placeholder.com/250x200",
		description: "Bright and colorful lilies to brighten up your day."
	  },
	  {
		id: 3,
		name: "Serene Tulips",
		image: "https://via.placeholder.com/250x200",
		description: "Delicate tulips that add a touch of elegance to any space."
	  },
	  {
		id: 4,
		name: "Sunny Sunflowers",
		image: "https://via.placeholder.com/250x200",
		description: "Bold and cheerful sunflowers to bring sunshine to your home."
	  }
  ];

  return (
    <FlowersContainer>
      <FlowersTitle>Our Flowers</FlowersTitle>
      <FlowersGrid>
        {flowerData.map((flower) => (
          <FlowerCard key={flower.id}>
            <FlowerImage src={flower.image} alt={flower.name} />
            <FlowerTitle>{flower.name}</FlowerTitle>
            <FlowerDescription>{flower.description}</FlowerDescription>
          </FlowerCard>
        ))}
      </FlowersGrid>
    </FlowersContainer>
  );
};

export default Flowers;
