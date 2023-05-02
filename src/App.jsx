import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CarProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Cart/>} />
            <Route path='*' element={<h2>Página en construcción</h2>} />
          </Routes>
        </CarProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;

