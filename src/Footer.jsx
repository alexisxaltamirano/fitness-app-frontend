/* eslint-disable react/no-unknown-property */
export function Footer() {
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css"
    integrity="sha384-BY+fdrpOd3gfeRvTSMT+VUZmA728cfF9Z2G42xpaRkUGu2i3DyzpTURDo5A6CaLK"
    crossorigin="anonymous"
  ></link>;
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-google-plus"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Exercises</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2024; Designed by <span className="designer">Alex</span>
        </p>
      </div>
    </footer>
  );
}
