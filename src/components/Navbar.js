import React from 'react'
import FormCliente from './FormCliente';
import Login from './Login';

import {
	Routes,
	Route,
	Link
} from 'react-router-dom';


const Navbar = () => {


  return (
    <div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Negozia-Front</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/formulariocliente" class="nav-link active" aria-current="page" >Formulario</Link>
        </li>
        <li class="nav-item">
          <Link to="/login"  class="nav-link" href="#">Login</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
	<Route exact path='/formulariocliente' element={< FormCliente />}></Route>
    <Route exact path='/login' element={< Login />}></Route>
</Routes>


    </div>
  )
}

export default Navbar