import React, { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import ProductModal from './ProductModal';

import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

// 1. Definimos o "contrato" de propriedades do componente
interface ShelfProps {
  showFilter?: boolean;
}

const shelfCategories = [
  "CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"
];

// 2. Recebemos o showFilter. Se não for enviado, ele assume 'true'
const ProductShelf: React.FC<ShelfProps> = ({ showFilter = true }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  if (loading) return <div className="container">Carregando produtos...</div>;

  return (
    <section className="shelf container">
      <div className="shelf__title">
        <div className="line"></div>
        <h2>Produtos relacionados</h2>
        <div className="line"></div>
      </div>

      {/* 3. LÓGICA CONDICIONAL: 
          Se showFilter for true: mostra o menu de abas.
          Se showFilter for false: mostra apenas o link "Ver todos". */}
      {showFilter ? (
        <nav className="shelf__filter">
          <ul>
            {shelfCategories.map((cat, index) => (
              <li key={index} className={cat === "CELULAR" ? "active" : ""}>
                {cat}
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div className="shelf__view-all">
          <a href="#">Ver todos</a>
        </div>
      )}

      <div className="shelf__carousel-wrapper">
        <button className="shelf__arrow shelf__arrow--left">
          <img src={arrowLeft} alt="Anterior" />
        </button>

        <div className="shelf__products">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-card__image">
                <img src={product.photo} alt={product.productName} />
              </div>
              <p className="product-card__name">{product.productName}</p>
              <p className="product-card__old-price">{formatPrice(product.price * 1.1)}</p>
              <p className="product-card__price">{formatPrice(product.price)}</p>
              <p className="product-card__installments">ou 10x de {formatPrice(product.price / 10)} sem juros</p>
              <p className="product-card__shipping">Frete grátis</p>
              <button className="product-card__button">Comprar</button>
            </div>
          ))}
        </div>

        <button className="shelf__arrow shelf__arrow--right">
          <img src={arrowRight} alt="Próximo" />
        </button>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductShelf;