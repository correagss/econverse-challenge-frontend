import React from 'react';
import type { Product } from '../types/product';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ product, onClose }) => {
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          {/* Pode usar um ícone X do Figma aqui */}
          ✕
        </button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>
          
          <div className="modal-info">
            {/* Nome vindo do JSON */}
            <h3>{product.productName}</h3>
            
            {/* Preço vindo do JSON */}
            <p className="modal-price">{formatPrice(product.price)}</p>
            
            {/* Descrição Curta vindo do JSON */}
            <p className="modal-description">{product.descriptionShort}</p>
            
            <a href="#" className="modal-details">Veja mais detalhes do produto {'>'}</a>
            
            <div className="modal-actions">
              <div className="quantity-selector">
                <button type="button">-</button>
                <span>01</span>
                <button type="button">+</button>
              </div>
              <button className="btn-buy" type="button">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;