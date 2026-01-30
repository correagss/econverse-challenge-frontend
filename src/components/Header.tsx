import React from 'react';

import logo from "../assets/logo.svg";
import iconCart from "../assets/cart.svg";
import iconHeart from "../assets/heart.svg";
import iconUser from "../assets/UserCircle.svg";
import iconGroup from "../assets/Group.svg";

// Ícones do topo
import shieldIcon from "../assets/shield.svg";
import truckIcon from "../assets/truck.svg";
import creditCardIcon from "../assets/credit-card.svg";

// Ícone da Coroa para o menu
import crownIcon from "../assets/crown.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* 1. BARRA DE INFORMAÇÕES (TOP) - 764px de largura */}
      <div className="header__top">
  <div className="header__top-content"> 
    <p><img src={shieldIcon} />Compra<span>100% segura</span></p>
    <p><img src={truckIcon} /><span>Frete grátis</span>acima de R$200</p>
    <p><img src={creditCardIcon} /><span>Parcele</span>suas compras</p>
  </div>
</div>

      {/* 2. BARRA PRINCIPAL (MIDDLE) - 1280px de largura */}
      <div className="header__middle container">
        <img src={logo} alt="Econverse" className="header__logo" />
        
        <div className="header__search">
          <input type="text" placeholder="O que você está buscando?" />
          <img src="/src/assets/lupa.svg" alt="Buscar" className="header__search-icon"/>
        </div>

        <div className="header__icons">
            <img src={iconGroup} alt="Meus Pedidos" />
            <img src={iconHeart} alt="Favoritos" />
            <img src={iconUser} alt="Minha Conta" />
            <img src={iconCart} alt="Carrinho" />
        </div>
      </div>

      {/* 3. MENU (BOTTOM) - 1141px de largura com Coroa */}
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li>LANÇAMENTOS</li>
          <li className="active">OFERTAS DO DIA</li>
          <li className="header__nav-signature">
            <img src={crownIcon} alt="" />
            ASSINATURA
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;