import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './views/home'

/*function App() {
  return (
    <div className="app-container">
        <div>Hello this is my first app!</div>
        <ProductCard label = {'Product1'} description={'Desc1'}></ProductCard>
    </div>
  );
}

const ProductCard = ({ label, description}) => {
  return (
    <div className='product-card'>
      <div className='product-card_label'>{label}</div>
      <div className='product-card_description'>{description}</div>
    </div>
  )
}*/

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
