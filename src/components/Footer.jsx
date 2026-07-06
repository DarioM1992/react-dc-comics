import './Footer.css';

const BigLogo = () => (
    <img className='BigLogo' src="img/dc-logo-bg.png" alt="logo-DC" />
);

const FooterTop = () => (
    <div className='FooterTop'>
        <div className='footer-col'>
            <h4>DC COMICS</h4>
            <ul>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">News</a></li>
            </ul>
        
            <h4>SHOP</h4>
            <ul>
                <li><a href="#">Shop DC</a></li>
                <li><a href="#">Shop DC Collectibles</a></li>
            </ul>
            
        </div>
         <div className='footer-col'>
            <h4>DC</h4>
            <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy policy (New)</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Talent Workshops</a></li>
            <li><a href="#">CPSC Certificates</a></li>
            <li><a href="#">Ratings</a></li>
            <li><a href="#">Shop Help</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className='footer-col'>
            <h4>SITES</h4>
            <ul>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>            
        
        </div>
    </div>
    
);


const FooterBot = () => (
    <div className='FooterBot'>
        <button>
            SIGN-UP NOW!
        </button>
        <section>
            <span>
                FOLLOW US
            </span>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </section>
    </div>
);

export const Footer = () => (
    <footer>
        <FooterTop />
        <BigLogo />
        <FooterBot />
    </footer>
    
);