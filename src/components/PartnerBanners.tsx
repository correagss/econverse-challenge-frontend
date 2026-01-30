import React from 'react';

const PartnerBanners: React.FC = () => {
  return (
    <section className="partners container">
      {/* Bloco do primeiro parceiro */}
      <div className="partners__item">
        <div className="partners__content">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button type="button">CONFIRA</button>
        </div>
      </div>

      {/* Bloco do segundo parceiro */}
      <div className="partners__item">
        <div className="partners__content">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button type="button">CONFIRA</button>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanners;