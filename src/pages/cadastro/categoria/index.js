import React, { useState } from 'react';
import PageDefault from '../../../Componentes/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {

  const [categorias, setCategorias] = useState(['teste']);

  const valoresIniciais = {
    nome: 'mi',
    descricao: 'mixinha',
    cor: '#bbb'
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
setValues({
  ...values,
  [chave]: valor,
})
  }

  return (
    <PageDefault>
      <h1>cadastro Categoria: {values.nome}</h1>

      <form  onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

      }}>
        <div>
          <label>
            Nome da Categoria:
          <input type="text"
              value={values.nome}
              onChange={function funcaoHandler(infosDoEvento) {
                setValue('nome', infosDoEvento.target.value);
              }}
            />

          </label>
          </div>
          <div>
          <label>
            Descrição:
          <textarea type="text"
              value={values.descricao}
              onChange={function funcaoHandler(infosDoEvento) {
                // setValues(infosDoEvento.target.value);
              }}
            />

          </label>
          </div>
          <div>
          <label>
           Cor:
          <input type="color"
              value={values.cor}
              onChange={function funcaoHandler(infosDoEvento) {
                // setValues(infosDoEvento.target.value);
              }}
            />

          </label>
        </div>
        <button>
          Cadastrar
</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;