import './Footer.css';

const BigLogo = () => (
    <img className='BigLogo' src="img/dc-logo-bg.png" alt="logo-DC" />
)

export const Footer = () => (
    <footer>
        <section className="DC-COMICS">
            <h3>DC COMICS</h3>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>

        </section>
        <section className='SHOP'>
            <h3>SHOP</h3>

        </section>
        <section className="DC">
            <h3>DC</h3>

        </section>
        <section className="SITES">
            <h3>SITES</h3>

        </section>
        <BigLogo />
    </footer>
    
);