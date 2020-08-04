import React from 'react';
import PageDefault from '../../../Componentes/PageDefault';
import {Link} from 'react-router-dom';


function CadastroVideo() {
  return (
    <PageDefault>
      <h1>cadastrar video</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;