import { useState } from "react";
import navbar from "./navbar.module.css";

const navLinks = [
  { link: "Home", color: "blue" },
  { link: "News", color: "red" },
  { link: "Sport", color: "green" },
  { link: "Reel", color: "brown" },
  { link: "Worklife", color: "yellow" },
  { link: "Travel", color: "orange" },
  { link: "Future", color: "pink" },
  { link: "Culture", color: "maroon" },
];

export default function Navbar() {
  const [active, setActive] = useState();

  return (
    <div className={navbar.navbar}>
      <div className={navbar.wrapper}>
        <div className={navbar.leftContainer}>
          <img
            alt=""
            src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/10/bbc-logo-700x512.jpg"
            width={150}
            height={60}
          />
          <div className={navbar.signIn}>
            <img
              alt=""
              src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png"
              width={30}
              height={30}
            />
            <p>Sign in</p>
          </div>
        </div>
        <div className={navbar.centerContainer}>
          {navLinks.map((link, i) => (
            <p
              className={
                active === link.link ? navbar.activeNavLink : navbar.navLink
              }
              style={
                active === link.link
                  ? { textDecorationColor: link.color }
                  : null
              }
              key={i}
              onMouseEnter={() => setActive(link.link)}
              onMouseLeave={() => setActive()}
            >
              {link.link}
            </p>
          ))}
        </div>
        <div className={navbar.rightContainer}>
          <div className={navbar.searchBox}>
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
              width={24}
              height={24}
            />
            <p>Search BBC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
