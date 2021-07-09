import './sass/main.scss'
function App() {
  return (
    <div className="container">
        <div className="sidebar">
          <button className="nav-btn"></button>
        </div>
        <div className="header">
          <img src="assets/logo.png" alt="nextzus logo" className="header__logo" />
          <h3 className="heading-3">
            Your Own Home
          </h3>
          <h1 className="heading-1">
            The ultimate personal freedom
          </h1>
          <button className="btn header__btn">View your properties</button>
          <div className="header__seenon-text">See on</div>
          <div className="header__seenon-logos">
            <img src="assets/logo-bbc.png" alt="logo1" />
            <img src="assets/logo-bi.png" alt="logo2" />
            <img src="assets/logo-forbes.png" alt="logo3" />
            <img src="assets/logo-techcrunch.png" alt="logo4" />
          </div>
        </div>
        <div className="realtors">
          <h3 className="heading-3">
            Top 3 Realtors
          </h3>
          <div className="realtors__list">
            <img src="assets/realtor-1.jpeg" alt="realtor1" className="realtors__img" />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">
                  Nikola Joeen
              </h4>
              <div className="realtors__sold">254 houses sold</div>
            </div>

            <img src="assets/realtor-2.jpeg" alt="realtor2" className="realtors__img" />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">
                  Kim Brown
              </h4>
              <div className="realtors__sold">236 houses sold</div>
            </div>

            <img src="assets/realtor-3.jpeg" alt="realtor3" className="realtors__img" />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">
                  Ream Seii
              </h4>
              <div className="realtors__sold">214 houses sold</div>
            </div>
          </div>
        </div>
        <section className="features">
          <div className="feature">
            <svg className="feature__icon">
              <use  xlinkHref="assets/sprite.svg#icon-global" />
            </svg>
            <h4 className="heading-4 heading-4--dark">
              World's best luxury homes
            </h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use  xlinkHref="assets/sprite.svg#icon-trophy" />
            </svg>
            <h4 className="heading-4 heading-4--dark">
              Only the best properties
            </h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use  xlinkHref="assets/sprite.svg#icon-map-pin" />
            </svg>
            <h4 className="heading-4 heading-4--dark">
              All home is top location
            </h4>
            <p className="feature__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use  xlinkHref="assets/sprite.svg#icon-key" />
            </svg>
            <h4 className="heading-4 heading-4--dark">
              New home in one week
            </h4>
            <p className="feature__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use  xlinkHref="assets/sprite.svg#icon-presentation" />
            </svg>
            <h4 className="heading-4 heading-4--dark">
              Top 1% realtors
            </h4>
            <p className="feature__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use  xlinkHref="assets/sprite.svg#icon-lock"/>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              Secure payment on XXX
            </h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
            </p>
          </div>
        </section>
        <div className="story__pictures">
          <img src="assets/story-1.jpeg" alt="couple of new house" className="story__img--1" />
          <img src="assets/story-2.jpeg" alt="new house" className="story__img--2" />
        </div>
        <div className="story__contents">
          <h3 className="heading-3 mb-sm">
            Happy Customer
          </h3>
          <h2 className="heading-2 mb-md heading-2--dark">
            &ldquo;  The best desicion of our lives &rdquo;
          </h2>
          <p className="story__text mb-lg">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
          </p>
          <button className="btn">Find your own home</button>
        </div>
        <div className="homes">
          <div className="home">
            <img src="assets/house-1.jpeg" alt="first house" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="assets/sprite.svg#icon-heart-full" />
            </svg>
            <h5 className="home__name">Beautiful home</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-map-pin" />
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-profile-male" />
              </svg>
              <p>5 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-expand" />
              </svg>
              <p>325 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-key" />
              </svg>
              <p>$1.2 millions</p>
            </div>
            <button className="btn home__btn">
                Contact realtors
            </button>
          </div>
          <div className="home">
            <img src="assets/house-2.jpeg" alt="first house" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="assets/sprite.svg#icon-heart-full" />
            </svg>
            <h5 className="home__name">The Modern Glass Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-map-pin" />
              </svg>
              <p>Canada</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-profile-male" />
              </svg>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-expand" />
              </svg>
              <p>225 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-key" />
              </svg>
              <p>$2.6 millions</p>
            </div>
            <button className="btn home__btn">
                Contact realtors
            </button>
          </div>

          <div className="home">
            <img src="assets/house-3.jpeg" alt="first house" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="assets/sprite.svg#icon-heart-full" />
            </svg>
            <h5 className="home__name">Cozy House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-map-pin" />
              </svg>
              <p>UK</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-profile-male" />
              </svg>
              <p>4 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-expand" />
              </svg>
              <p>250 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-key" />
              </svg>
              <p>$850000 millions</p>
            </div>
            <button className="btn home__btn">
                Contact realtors
            </button>
          </div>
          
          <div className="home">
            <img src="assets/house-4.jpeg" alt="fourth house" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="assets/sprite.svg#icon-heart-full" />
            </svg>
            <h5 className="home__name">large Rostical Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-map-pin" />
              </svg>
              <p>Portugal</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-profile-male" />
              </svg>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-expand" />
              </svg>
              <p>480 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-key" />
              </svg>
              <p>$1.9 millions</p>
            </div>
            <button className="btn home__btn">
                Contact realtors
            </button>
          </div>
          
          <div className="home">
            <img src="assets/house-5.jpeg" alt="fifth house" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="assets/sprite.svg#icon-heart-full" />
            </svg>
            <h5 className="home__name">Majestic Palace House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-map-pin" />
              </svg>
              <p>Germany</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-profile-male" />
              </svg>
              <p>18 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-expand" />
              </svg>
              <p>4230 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-key" />
              </svg>
              <p>$5 millions</p>
            </div>
            <button className="btn home__btn">
                Contact realtors
            </button>
          </div>
          
          <div className="home">
            <img src="assets/house-6.jpeg" alt="first house" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="assets/sprite.svg#icon-heart-full" />
            </svg>
            <h5 className="home__name">Modern Family Apartment</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-map-pin" />
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-profile-male" />
              </svg>
              <p>3 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-expand" />
              </svg>
              <p>325 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="assets/sprite.svg#icon-key" />
              </svg>
              <p>$600,000</p>
            </div>
            <button className="btn home__btn">
                Contact realtors
            </button>
          </div>
          
        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src="assets/gal-1.jpeg" alt="gallery 1" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src="assets/gal-2.jpeg" alt="gallery 2" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src="assets/gal-3.jpeg" alt="gallery 3" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src="assets/gal-4.jpeg" alt="gallery 4" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src="assets/gal-5.jpeg" alt="gallery 5" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src="assets/gal-6.jpeg" alt="gallery 6" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src="assets/gal-7.jpeg" alt="gallery 7" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src="assets/gal-8.jpeg" alt="gallery 8" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img src="assets/gal-9.jpeg" alt="gallery 9" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img src="assets/gal-10.jpeg" alt="gallery 10" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img src="assets/gal-11.jpeg" alt="gallery 11" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img src="assets/gal-12.jpeg" alt="gallery 12" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--13">
            <img src="assets/gal-13.jpeg" alt="gallery 13" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--14">
            <img src="assets/gal-14.jpeg" alt="gallery 14" className="gallery__img"/>
          </figure>
        </div>
        <div className="footer">
          <ul className="nav">
            <li className="nav__item"><a href="#1" className="nav__link">Find your dream home</a></li>
            <li className="nav__item"><a href="#2" className="nav__link">Request Proposal</a></li>
            <li className="nav__item"><a href="#3" className="nav__link">Download home planner</a></li>
            <li className="nav__item"><a href="#4" className="nav__link">Contact us</a></li>
            <li className="nav__item"><a href="#5" className="nav__link">Summit your properties</a></li>
            <li className="nav__item"><a href="#6" className="nav__link">Come and work with us</a></li>
          </ul>
          <p className="copyright">Copy 2021 by NivannaVan Student of Jonas</p>
        </div>
    </div>
  );
}

export default App;
