import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from "./HomeScreen";
import ProductScreen from "./ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Shopaholic</a>
        </header>
        <main>
          <Routes> 
            <Route path="/product/:slug" element={<ProductScreen/>} />
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
