import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          SWOLL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link to="/exercises" className="nav-item nav-link">
              Exercises
            </Link>
            {localStorage.jwt === undefined ? (
              <>
                <Link to="/signup" className="nav-item nav-link">
                  Signup
                </Link>
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
              </>
            ) : (
              <Link to="logout" className="nav-item nav-link">
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
