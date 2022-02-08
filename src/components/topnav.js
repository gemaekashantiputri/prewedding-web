import '../styles/main.css';
import '../styles/sign.css';
import '../styles/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.css';
import '../styles/card.css';

const Topnav = () => {
  return (
    <><nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1>
              PreWedding
            </h1>
          </a>

          <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/about" className="navbar-item">
              About
            </a>
            <a href="/signin" className="navbar-item">
              <button>
                Sign in/Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav></>
  )
}

export default Topnav;