import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Home/header/header';
import Footer from "./components/Home/footer/footer";
import AboutUs from "./components/Home/about/about";
import Available from "./components/Home/available/available";
import Comments from "./components/Home/deals/deals";
import Catalog from "./components/Catalog/Catalog";
import ItemPage from "./components/Item/Item";
import { ItemsProvider } from './context/itemscontext';
function App() {
  return (

      <Router>
          <Header />

          <ItemsProvider>
              <Routes>
                  <Route path="/" element={
                      <>
                          <AboutUs />
                          <Available />
                          <Comments />
                      </>
                  } />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/item/:id" element={<ItemPage />} />
              </Routes>
          </ItemsProvider>

          <Footer />
      </Router>


  );
}
export default App;