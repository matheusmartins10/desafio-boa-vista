import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Rg from './pages/Rg/index'
import Fullname from './pages/Fullname/index'
import Birth from './pages/Birth/index'
import MotherFullname from './pages/MotherFullname/index'
import Kba from './pages/Kba/index'

import ErrorQuestion from './pages/ErrorQuestion/index'
import ErrorRegister from './pages/ErrorRegister/index'

import SuccessRegister from './pages/SuccessRegister/index'

const Routes = () => {
   return (
       <BrowserRouter>
           <Switch>
               <Route path="/" exact  component={Home} />
               <Route path="/rg" component={Rg} />
               <Route path="/nome" component={Fullname} />
               <Route path="/data-de-nascimento" component={Birth} />
               <Route path="/nome-da-mae-completo" component={MotherFullname} />
               <Route path="/kba" component={Kba} />
               <Route path="/error" component={ErrorQuestion} />
               <Route path="/error-de-cadastro" component={ErrorRegister} />
               <Route path="/success" component={SuccessRegister} />
           </Switch>
       </BrowserRouter>
   )
}

export default Routes
