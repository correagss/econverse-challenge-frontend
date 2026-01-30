import React from 'react';
import logo from '../assets/logo.svg'; // Reutilizando a logo que você já tem

const brandsData = [1, 2, 3, 4, 5]; // Array para gerar os 5 círculos

const Brands: React.FC = () => {
  return (
    <section className="brands container">
      <h2 className="brands__title">Navegue por marcas</h2>
      
      <div className="brands__list">
        {brandsData.map((item) => (
          <div key={item} className="brands__item">
            <div className="brands__circle">
              <img src={logo} alt="Marca" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;