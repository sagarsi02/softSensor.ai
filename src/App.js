import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route exact path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
