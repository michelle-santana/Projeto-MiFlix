import React from 'react';
import Menu from '../../Componentes/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Componentes/BannerMain';
import Carousel from '../../Componentes/Carousel';
import Footer from '../../Componentes/Footer';



const Home = () => {
    return (
      <>
      <Menu />
  
      <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Um dos melhores animes da vida!"}
      />
  
      <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
      />
  
      <Carousel
          category={dadosIniciais.categorias[1]}
      />
  
      <Carousel
          category={dadosIniciais.categorias[2]}
      />      
  
      <Carousel
          category={dadosIniciais.categorias[3]}
      />           
  
      <Carousel
          category={dadosIniciais.categorias[4]}
      />           
  
      <Carousel
          category={dadosIniciais.categorias[5]}
      />           
      <Carousel
          category={dadosIniciais.categorias[6]}
      />           
  
      <Footer />
  </>

    );

  }


export default Home;
