import React from "react";
import { Footer, Link } from "vanilla-framework-react";

export const MainFooter = () => (
  <Footer>
    <p>
      © 2018{" "}
      <Link soft href="https://github.com/pojntfx">
        Felicitas Pojtinger
      </Link>
    </p>
    <nav className="p-footer__nav">
      <ul className="p-footer__links">
        <li className="p-footer__item">
          <Link
            className="p-footer__link"
            href="https://github.com/pojntfx/ubuntu-free-culture-showcase-frontend-web"
          >
            Source Code
          </Link>
        </li>
        <li className="p-footer__item">
          <Link
            className="p-footer__link"
            href="https://www.gnu.org/licenses/gpl.html"
          >
            Code License (GPL-3.0)
          </Link>
        </li>
        <li className="p-footer__item">
          <Link
            className="p-footer__link"
            href="https://creativecommons.org/licenses/by/4.0/"
          >
            Content License (CC-BY-4.0)
          </Link>
        </li>
      </ul>
    </nav>
  </Footer>
);
