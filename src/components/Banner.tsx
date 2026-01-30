import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="banner">
  <div className="banner__overlay">
    {/* O container deve estar aqui dentro */}
    <div className="container"> 
      <div className="banner__content">
        <h1>Venha conhecer nossas promoções</h1>
        <h2><span>50% Off</span> nos produtos</h2>
        <button className="banner__button">Ver produto</button>
      </div>
    </div>
  </div>
</section>
  );
};

export default Banner;