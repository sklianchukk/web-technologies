import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Home/header/header';
import Footer from "./components/Home/footer/footer";
import AboutUs from "./components/Home/about/about";
import Available from "./components/Home/available/available";
import Comments from "./components/Home/deals/deals";
import Catalog from "./components/Catalog/Catalog";
import ItemPage from "./components/Item/Item";
import {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {ItemsProvider} from './context/itemscontext';
import {loadCartFromLocalStorage} from "./redux/cartAction";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import Success from "./components/Cart/Success";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Завантажити кошик з локального сховища при завантаженні додатку
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);
  return (

    <Router>
      <Header/>

      <ItemsProvider>
        <Routes>
          <Route path="/" element={
            <>
              <AboutUs/>
              <Available/>
              <Comments/>
            </>
          }/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/item/:id" element={<ItemPage/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </ItemsProvider>

      <Footer/>
    </Router>


  );
}

export default App;