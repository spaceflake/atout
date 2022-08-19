// import reactLogo from './assets/react.svg'
import atoutLogo from './Assets/logos/atout_logo_white_full.png'
import heroImg from './Assets/images/hero.png'
import shirt1 from './Assets/images/t-shirt_mockup.png'
import shirt2 from './Assets/images/t-shirt_mockup2.png'
import illustration1 from './Assets/images/illustration1.png'
import illustration2 from './Assets/images/illustration2.png'
import vector1 from './Assets/images/vector1.png'
import vector2 from './Assets/images/vector2.png'
import logoDark from './Assets/logos/logoDark.png'
import facebook from './Assets/logos/facebook.png'
import twitter from './Assets/logos/twitter.png'
import instagram from './Assets/logos/instagram.png'
import menu from './Assets/icons/menu.png'
import send from './Assets/icons/send.png'
import cart from './Assets/icons/shopping-cart.png'
import cartBtn from './Assets/icons/cart-btn.png'
import search from './Assets/icons/search.png'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header container flex between items-center wrap">
        <img src={atoutLogo} alt="Atout logo" />
        <nav className="flex gap-50">
          <ul className="flex items-center uppercase gap-50 navlist">
            <li>home</li>
            <li>collection</li>
            <li>contact</li>
          </ul>
          <div>
            <button className="btn bg-blue flex gap-1 sign-btn">
              <i>
                <img src={cart} alt="" />
              </i>
              <p className="uppercase">sign in</p>
            </button>
            <button className="btn menu-btn">
              <i>
                <img src={menu} alt="" />
              </i>
            </button>
          </div>
        </nav>
      </header>
      {/* hero */}
      <section className="hero flex items-center container">
        <div className="cta">
          <h1 className="headline_hero">
            Discover fantastic creations from great artists.
          </h1>
          <div className="search flex">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <button className="btn bg-pink flex gap-1">
              <i>
                <img src={search} alt="" />
              </i>
              <p>Search</p>
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="artfull shapes" className="heroImg" />
        </div>
      </section>
      {/* categories */}
      <section className="categories container">
        <div className="categorie_card flex column justify-center">
          <div className="categorie_header">
            <h2 className="headline">Graphics</h2>
            <h3 className="sub-headline">
              Amazing graphics for many usecases.
            </h3>
          </div>
          <div className="flex categorie_footer">
            <img
              className="category-img-back"
              src={shirt1}
              alt="a t-shirt with print"
            />
            <img
              className="category-img-front"
              src={shirt2}
              alt="a t-shirt with print"
            />
          </div>
        </div>
        <div className="categorie_card flex column justify-center">
          <div className="categorie_header">
            <h2 className="headline">Ilustrations</h2>
            <h3 className="sub-headline">
              Browse wonderfully creative illustrations.
            </h3>
          </div>
          <div className="flex categorie_footer">
            <img
              className="category-img-back"
              src={illustration1}
              alt="a t-shirt with print"
            />
            <img
              className="category-img-front"
              src={illustration2}
              alt="a t-shirt with print"
            />
          </div>
        </div>
        <div className="categorie_card flex column justify-center">
          <div className="categorie_header">
            <h2 className="headline">Vectors</h2>
            <h3 className="sub-headline">
              Fantastic additions to your project.
            </h3>
          </div>
          <div className="flex categorie_footer">
            <img
              className="category-img-back"
              src={vector1}
              alt="a t-shirt with print"
            />
            <img
              className="category-img-front"
              src={vector2}
              alt="a t-shirt with print"
            />
          </div>
        </div>
      </section>

      {/* products */}
      <section className="container products">
        <div className="trends">
          <h1 className="uppercase">top trending</h1>
        </div>
        <div className="product-row">
          <div className="product-card">
            <div className="product-details flex items-center between">
              <div>
                <h3>Title</h3>
                <p>Author</p>
                <h3>$5.25</h3>
              </div>
              <button className="cart btn">
                <i>
                  <img src={cartBtn} alt="" />
                </i>
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-details flex items-center between">
              <div>
                <h3>Title</h3>
                <p>Author</p>
                <h3>$5.25</h3>
              </div>
              <button className="cart btn">
                <i>
                  <img src={cartBtn} alt="" />
                </i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* artists */}
      <section className="full-bleed bg-green">
        <div className="container artists ">
          <h1>Featured artists</h1>
          <div className="row flex gap-50 justify-center">
            <div className="artist-card flex column">
              <div className="artist-head flex items-center">
                <div className="avatar"></div>
                <div>
                  <h3>Artist name</h3>
                  <p>Categorie</p>
                  <p>Style</p>
                </div>
              </div>
              <div className="artist-gallery">
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
              </div>
            </div>
            <div className="artist-card flex column">
              <div className="artist-head flex items-center">
                <div className="avatar"></div>
                <div>
                  <h3>Artist name</h3>
                  <p>Categorie</p>
                  <p>Style</p>
                </div>
              </div>
              <div className="artist-gallery">
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
                <img src={illustration1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="full-bleed bg-blue">
        <div className="contact container gap-50">
          <div>
            <h1>Questions?</h1>
            <h2>Send us a message, we'll be happy to help.</h2>
          </div>
          <form className="flex column gap-1">
            <input type="text" name="" id="" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Question?"
            ></textarea>
            <input type="email" name="" id="" placeholder="Your email" />
            <button className="btn bg-pink flex gap-1">
              <i>
                <img src={send} alt="" />
              </i>
              <p>Send</p>
            </button>
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="full-bleed bg-dark">
        <div className="container footer flex column">
          <div className="footer-top gap-50 justify-center">
            <div className="flex column gap-1">
              <h3>Sign up to our newsletter.</h3>
              <input type="email" placeholder="Email" />
              <button className="btn bg-pink flex gap-1">
                <i>
                  <img src={send} alt="" />
                </i>
                <p>Subscribe</p>
              </button>
            </div>
            <ul>
              <li>Terms</li>
              <li>Licenses</li>
              <li>About Atout</li>
            </ul>
          </div>
          <div className="flex justify-center copy">
            <p>Copyright &copy; 2022 All rights reserved.</p>
            <div className="flex gap-1">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
            </div>
            <img src={logoDark} alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
