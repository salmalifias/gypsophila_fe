import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIconWhite from "parts/IconTextWhite";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm shadow-sm bg-main">
          <div className="container">
            <nav className="navbar navbar-expand-lg shadow-sm">
              <Button className="mx-auto" href="" type="link">
                <BrandIcon />
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header style={{backgroundColor:"#3F4D5A"}} className="spacing-sm">
        <nav className="navbar navbar-expand-lg shadow-sm">
          <div className="container">
            <div className="d-none d-lg-block">
              <BrandIconWhite />
            </div>

            <div className="d-block d-lg-none">
              <BrandIcon />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-cateringkita"
              aria-controls="navbar-cateringkita"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderRadius: 5, color: "red" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-cateringkita">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${getNavLinkClass("/homepagemember")}`}>
                  <Button className="nav-link" type="link" href="/homepagemember">
                    Beranda
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/tentangmember")}`}>
                  <Button className="nav-link" type="link" href="/tentangmember">
                    Tentang
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/galerimember")}`}>
                  <Button className="nav-link" type="link" href="/galerimember">
                    Galeri
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/mu-artistmember")}`}>
                  <Button className="nav-link" type="link" href="/mu-artistmember">
                    MU Artist
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/profile")}`}>
                  <Button className="nav-link" type="link" href="/profile">
                    Profil
                  </Button>
                </li>
                <li>
                  <Button className="btn px-5" type="link" href="/" hasShadow isPrimary>
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fade>
  );
}
