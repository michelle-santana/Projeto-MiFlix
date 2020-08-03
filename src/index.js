import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './pages/home';

import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';

// desafio da descrição
const pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" component={home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

