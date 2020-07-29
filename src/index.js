import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/Video/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroCategoria from './pages/cadastro/Categoria';

// desafio - inserir um pagina com jogo no 404  (tipo Google)
const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter> 
    <Switch>
     <Route path="/cadastro/video" component={CadastroVideo} />
     <Route path="/cadastro/categoria" component={CadastroCategoria} />
     <Route path="/" component={App} exact/>
     <Route component={Pagina404}/>
     </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

