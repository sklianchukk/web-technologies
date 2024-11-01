import Header from './components/Home/header/header';
import Footer from "./components/Home/footer/footer";
import AboutUs from "./components/Home/about/about";
import Available from "./components/Home/available/available";
import Comments from "./components/Home/deals/deals";
function App() {
  return (
      <div>
        <Header />
        <AboutUs />
        <Available />
        <Comments />
        <Footer />
      </div>
  );
}
export default App;