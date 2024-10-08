import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="fistHeader-div">
      <nav
        class="navbar-expand-sm  navbar-dark nav-top"
        style={{ borderRadius: 0 }}
      >
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="#"> Order Tracking</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
          <li class="nav-item"><a class="nav-link" href="#">FAQ</a></li>
          <div className="nav-items-right">
            <div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div className="nav-display-row">
                    <p className="nav-top-signup">
                      {" "}
                      Sign up for 10% off your first order:
                    </p>
                    <a class="nav-link nav-move-top" href="#">
                      Sign UP
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className=" nav-items-right-side">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div className="nav-display-row">
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/t/4/assets/flag_en.png?v=14076981825125011091700451475"
                    className="nav-image-size"
                  />

                  <a
                    class="nav-link dropdown-toggle languages-div"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    English
                  </a>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle nav-select-nationality"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                United States(USD $)
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Canada (CAD $)
                </a>
                <a class="dropdown-item" href="#">
                Japan(JPY¥)
                </a>
                <a class="dropdown-item" href="#">
                  United Kingdom(GBP£)
                </a>
                <a class="dropdown-item" href="#">
                  United States(USD$)
                </a>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
