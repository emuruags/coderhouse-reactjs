//import logo from './logo.svg';
import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        

        <NavBar/>


        <Routes>
          <Route exact path='/'
            
            element={ <ItemListContainer greeting='¡¡¡Bienvenidos a Vikings Fitness Gear!!!' /> }
            
          />
          <Route path='/categoria/:Id' 
                  element={ <ItemListContainer greeting='¡¡¡Bienvenidos a Vikings Fitness Gear desde ROUTE CATEGORIA/:ID!!!' /> }
            

          />
          <Route path='/detalle/:detalleId' 
                  element={ <ItemDetailContainer  /> }
            

          />
          <Route path='/item/:detalleId' 
                  element={ <ItemDetailContainer  /> }
            

          />



          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>

      

      {/* <div>---- Contenedor de detalles ----</div>
      <ItemDetailContainer prodID={5} /> */}


      {/* <ItemCount stock='5'/> */}
      
      
    </div>
  );
}

export default App;
