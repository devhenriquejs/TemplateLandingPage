import styled, { keyframes } from 'styled-components';

const palette = {
  blueDark: '#0A1F38',
  blueGradientStart: '#0040FF',
  blueGradientEnd: '#007BFF',
  yellow: '#FFD700',
  white: '#FFFFFF'
};

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

export const OrbitSection = styled.section`
  padding: 100px 20px;
  background: ${palette.blueDark};
  display: flex;
  justify-content: center;
`;

export const OrbitWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 650px;
  height: 650px;

  @media (max-width: 768px) {
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
  }
`;

export const RocketCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: ${float} 2s ease-in-out infinite;

  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OrbitCard = styled.div`
  position: absolute;
  width: 220px;
  height: 180px;
  background: linear-gradient(145deg, ${palette.blueGradientStart}, ${palette.blueGradientEnd});
  color: ${palette.white};
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  &.card-0 { top: 20px; left: 50%; transform: translate(-50%, 0); }
  &.card-1 { top: 50%; right: 20px; transform: translate(0, -50%); }
  &.card-2 { bottom: 20px; left: 50%; transform: translate(-50%, 0); }
  &.card-3 { top: 50%; left: 20px; transform: translate(0, -50%); }

  @media (max-width: 768px) {
    position: static;
    transform: none !important;
  }
`;

export const OrbitIcon = styled.div`
  color: ${palette.yellow};
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const OrbitTitle = styled.h3`
  color: ${palette.yellow};
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const OrbitText = styled.p`
  color: ${palette.white};
  font-size: 0.95rem;
  line-height: 1.4;
`;