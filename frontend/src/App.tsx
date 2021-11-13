import React from 'react';
import Cadastro from './pages/cadastro/Cadastro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import ListarPostagem from './components/postagens/listarPostagem/ListarPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';

import Sobre from './pages/sobre/Sobre';
import ListaTema from './components/temas/listarTema/ListarTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrar'>
            <Cadastro />
          </Route>

          <Route path='/postagens'>
            <ListarPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPostagem />
          </Route>

          <Route exact path='/formularioPostagem/:id'>
            <CadastroPostagem />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route exact path='/sobre'>
            <Sobre />
          </Route>

        </div>
      </Switch>
      
    </Router>
  )
}
export default App;