//import logo from './logo.svg';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>

      <div>---- Contenedor de detalles ----</div>
      <ItemDetailContainer prodID={5} />
      <div>---- Contenedor de Lista de Productos ----</div>
      <ItemListContainer greeting='¡¡¡Bienvenidos a Vikings Fitness Gear!!!' />

      {/* <ItemCount stock='5'/> */}
      
      
    </div>
  );
}

export default App;
