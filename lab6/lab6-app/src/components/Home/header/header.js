import './header.css';
import logo from '../../../context/images/logo.jpeg';
function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="logo" src={logo} alt="logo"/>
            </a>
            <nav>
                <ul>
                    <li><a href="/history">Історія бренду</a></li>
                    <li><a href="/catalog">Каталог</a></li>
                    <li><a href="/contact">Контакти</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;