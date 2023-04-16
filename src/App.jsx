import './App.css';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting="Bienvenido a nuestra tienda online de electrónica, donde encontrarás todo lo relacionado con tecnología que seguramente necesitas!"/>} />
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer />} />
          <Route path='/item/:idItem' element= {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

