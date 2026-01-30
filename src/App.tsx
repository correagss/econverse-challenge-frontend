import './styles/global.scss';
import './styles/header.scss';
import './styles/banner.scss';
import './styles/categories.scss';
import './styles/shelf.scss';
import './styles/partners.scss';
import './styles/footer.scss';
import './styles/modal.scss';
import './styles/brands.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import ProductShelf from './components/ProductShelf';
import PartnerBanners from './components/PartnerBanners';
import Brands from './components/Brands'; // 1. Importando o novo componente de Marcas
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Categories />
        
        {/* 1ª Vitrine: Mostra o filtro (showFilter padrão é true) */}
        <ProductShelf />

        <PartnerBanners /> 

        {/* 2ª Vitrine: Esconde o filtro e mostra "Ver todos" */}
        <ProductShelf showFilter={false} />

        <PartnerBanners /> 
        <Brands />

        {/* 3ª Vitrine: Esconde o filtro e mostra "Ver todos" */}
        <ProductShelf showFilter={false} />

      </main>
      <Footer /> 
    </div>
  );
}

export default App;