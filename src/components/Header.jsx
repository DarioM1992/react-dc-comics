import './Header.css';

const Logo = () => (
    <img className='logo' src="img/dc-logo.png" alt="logo-DC" />
)

const links = [
    {
        id: 1,
        href: '#',
        content: 'characters',
        active: false
    },
    {
        id: 2,
        href: '#',
        content: 'comics',
        active: true
    },
    {
        id: 3,
        href: '#',
        content: 'movies',
        active: false
    },
    {
        id: 4,
        href: '#',
        content: 'tv',
        active: false
    },
    {
        id: 5,
        href: '#',
        content: 'games',
        active: false
    },
    {
        id: 6,
        href: '#',
        content: 'collectibles',
        active: false
    },
    {
        id: 7,
        href: '#',
        content: 'videos',
        active: false
    },
    {
        id: 8,
        href: '#',
        content: 'fans',
        active: false
    },
    {
        id: 9,
        href: '#',
        content: 'news',
        active: false
    },
    {
        id: 10,
        href: '#',
        content: 'shop',
        active: false
    },

]


const Nav = () => (
    <ul>
        {links.map(link => (<li key={link.id}> <a href={link.href} className= {link.active ? 'active' : false}>{link.content}</a></li>))}
            {/* <li><a href="#">characters</a></li>
            <li><a href="#" className="active">comics</a></li>
            <li><a href="#">movies</a></li>
            <li><a href="#">tv</a></li>
            <li><a href="#">games</a></li>
            <li><a href="#">collectibles</a></li>
            <li><a href="#">videos</a></li>
            <li><a href="#">fans</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">shop</a></li> */}
    </ul>
)

export const Header = () => (
    <header>
        <Logo />
        <Nav />
    </header>
);