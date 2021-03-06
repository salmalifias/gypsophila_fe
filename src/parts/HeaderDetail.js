import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIconWhite from "parts/IconTextWhite";
import BrandIcon from "parts/IconText";

export default function HeaderDetail(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm shadow-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                <BrandIconWhite />
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <div className="container">
            <BrandIcon />

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-cateringkita"
              aria-controls="navbar-cateringkita"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderRadius: 5, color: 'red' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mt-2" id="navbar-cateringkita">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                  <Button className="nav-link-detail" type="link" href="/">
                    Beranda
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/tentang")}`}>
                  <Button className="nav-link-detail" type="link" href="/tentang">
                    Tentang
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/galeri")}`}>
                  <Button className="nav-link-detail" type="link" href="/galeri">
                    Galeri
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/mu-artist")}`}>
                  <Button className="nav-link-detail" type="link" href="/mu-artist">
                    MU Artist
                  </Button>
                </li>
                {/* <li>
                  <Button className="btn px-5" type="link" href="/login" hasShadow isPrimary>
                    Login
                  </Button>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fade>
  );
}
