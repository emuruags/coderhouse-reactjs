//import logo from './logo.svg';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='¡¡¡Bienvenidos a Vikings Fitness Gear!!!' />

      {/* <ItemCount stock='5'/> */}
    </div>
  );
}

export default App;
