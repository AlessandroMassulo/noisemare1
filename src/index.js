import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function CadastroVideo(){
  return (
    <div>
      pagina de cadastro de video
    </div>
  )
}



ReactDOM.render(
  <BrowserRouter> 
    <Switch>
     <Route path="/cadastro" component={CadastroVideo} />
     <Route path="/" component={App} />
     </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


