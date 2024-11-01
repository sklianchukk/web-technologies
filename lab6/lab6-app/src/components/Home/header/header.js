import './header.css';
import logo from '../../../images/logo.jpeg';
function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>
            <nav>
                <ul>
                    <li><a href="/home">Додому</a></li>
                    <li><a href="/history">Історія бренду</a></li>
                    <li><a href="/catalog">Каталог</a></li>
                    <li><a href="/contact">Контакти</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;