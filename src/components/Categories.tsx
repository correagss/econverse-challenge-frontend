import React from 'react';

// Importando os ícones (ajuste os nomes conforme você salvou)
import techIcon from '../assets/cat-tech.svg';
import superIcon from '../assets/cat-super.svg';
import drinksIcon from '../assets/cat-drinks.svg';
import toolsIcon from '../assets/cat-tools.svg';
import healthIcon from '../assets/cat-health.svg';
import sportsIcon from '../assets/cat-sports.svg';
import fashionIcon from '../assets/cat-fashion.svg';

const categories = [
  { id: 1, name: 'Tecnologia', icon: techIcon, active: true },
  { id: 2, name: 'Supermercado', icon: superIcon },
  { id: 3, name: 'Bebidas', icon: drinksIcon },
  { id: 4, name: 'Ferramentas', icon: toolsIcon },
  { id: 5, name: 'Saúde', icon: healthIcon },
  { id: 6, name: 'Esportes e Fitness', icon: sportsIcon },
  { id: 7, name: 'Moda', icon: fashionIcon },
];

const Categories: React.FC = () => {
  return (
    <section className="categories container">
      <div className="categories__list">
        {categories.map((cat) => (
          <div key={cat.id} className={`categories__item ${cat.active ? 'active' : ''}`}>
            <div className="categories__icon-box">
              <img src={cat.icon} alt={cat.name} />
            </div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;