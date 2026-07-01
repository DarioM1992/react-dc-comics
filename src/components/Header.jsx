import './Header.css';

const Logo = () => (
    <img src="img/dc-logo.png" alt="logo-DC" />
)

const Nav = () => (
    <ul>
        <li>
            <a href="#">characters</a>
            <a href="#" className="active">comics</a>
            <a href="#">movies</a>
            <a href="#">tv</a>
            <a href="#">games</a>
            <a href="#">collectibles</a>
            <a href="#">videos</a>
            <a href="#">fans</a>
            <a href="#">news</a>
            <a href="#">shop</a>
        </li>
    </ul>
)

export const Header = () => (
    <header>
        <Logo />
        <Nav />
    </header>
);