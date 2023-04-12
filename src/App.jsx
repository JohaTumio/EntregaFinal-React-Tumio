import './App.css';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting = "Bienvenido a nuestra tienda online de electrónica, donde encontrarás todo lo relacionado con tecnología que seguramente necesitas!"/>
{/*       <ItemListContainer/> */}
{/*       <ItemCount stock={10} inicial={1} onAdd={(contador) => console.log("cantidad agregada", contador)}/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
