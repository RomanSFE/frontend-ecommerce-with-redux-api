import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainHome from './components/homepage/MainHome';
import ProductDetailsSc from './components/ProductDetailsSc';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <>
    <Routes>
          <Route exact path="/" element={<MainHome/>}/>
          <Route path="/product/:id" element={<ProductDetailsSc/>}/>

          <Route path="/login" element={<UserLogin/>}/>
    </Routes>
    </>
  );
}

export default App;
