//import logo from './logo.svg';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='¡¡¡Bienvenidos a Vikings Fitness Gear!!!' />
    </div>
  );
}

export default App;
