import React from 'react';
import { Clock, Rocket, TrendingUp, User, Award } from 'lucide-react';
import rocketIcon from '../../assets/images/rocket.png';
import {
  OrbitSection,
  OrbitWrapper,
  OrbitCard,
  OrbitIcon,
  OrbitTitle,
  OrbitText,
  RocketCenter
} from './styles';

const benefits = [
  {
    title: 'Gere Mais Leads',
    desc: 'Atraia público qualificado.',
    icon: <User size={28} />
  },
  {
    title: 'Acelere Vendas',
    desc: 'Converta visitantes em clientes.',
    icon: <TrendingUp size={28} />
  },
  {
    title: 'Economize Tempo',
    desc: 'Foque no que importa.',
    icon: <Clock size={28} />
  },
  {
    title: 'Construa Autoridade',
    desc: 'Seja referência no mercado.',
    icon: <Award size={28} />
  }
];

function BenefitsOrbit() {
  return (
    <OrbitSection>
      <OrbitWrapper>
        <RocketCenter>
          <img src={rocketIcon} alt="Foguete" />
        </RocketCenter>
        {benefits.map((item, index) => (
          <OrbitCard className={`card-${index}`} key={index}>
            <OrbitIcon>{item.icon}</OrbitIcon>
            <OrbitTitle>{item.title}</OrbitTitle>
            <OrbitText>{item.desc}</OrbitText>
          </OrbitCard>
        ))}
      </OrbitWrapper>
    </OrbitSection>
  );
}

export default BenefitsOrbit;