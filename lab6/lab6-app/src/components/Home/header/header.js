import './header.css';
import logo from '../../../context/images/logo.jpeg';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo"/>
      <nav>
        <ul>
          <li><a href="/">Main</a></li>
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="/cart">Shopping cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;