import { Logo } from "..";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const links = [
    {
      num: "00",
      title: "Home",
      url: "/",
    },
    {
      num: "01",
      title: "Destination",
      url: "/destinations",
    },
    {
      num: "02",
      title: "Crew",
      url: "/crew",
    },
    {
      num: "03",
      title: "Technology",
      url: "/technology",
    },
  ];
  const [PhoneNav, setPhoneNav] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <header className={stickyNavbar ? "nav-header stickynav" : "nav-header"}>
        <nav className="navbar flex-ac-jb container">
          <Logo />
          <div className="navbar--right flex-ac">
            <div className="navbar--border"></div>
            <div className="navbar--links">
              <ul className="flex-ac">
                {links.map((link) => (
                  <Link href={link.url} key={link && link.num}>
                    <a>
                      <li
                        className={
                          router.pathname == link.url
                            ? "navbar--active flex-ac"
                            : "flex-ac"
                        }
                      >
                        <span>{link && link.num}</span>
                        {link && link.title}
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <button className="navbar--toggle" onClick={() => setPhoneNav(true)}>
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="3" fill="#D0D6F9" />
              <rect y="9" width="24" height="3" fill="#D0D6F9" />
              <rect y="18" width="24" height="3" fill="#D0D6F9" />
            </svg>
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {PhoneNav && (
          <motion.nav
            className="phone-nav"
            initial={{ x: 200, opacity: 0 }}
            transition={{ type: "tween" }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
          >
            <button
              className="phone-nav--close"
              onClick={() => setPhoneNav(false)}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.5752"
                  y="0.954102"
                  width="24"
                  height="3"
                  transform="rotate(45 2.5752 0.954102)"
                  fill="#D0D6F9"
                />
                <rect
                  x="0.454102"
                  y="17.9246"
                  width="24"
                  height="3"
                  transform="rotate(-45 0.454102 17.9246)"
                  fill="#D0D6F9"
                />
              </svg>
            </button>
            <ul>
              {links.map((link) => (
                <Link href={link.url} key={link && link.num}>
                  <a>
                    <li
                      className={
                        router.pathname === link.url
                          ? "phone-nav--active flex-ac"
                          : "flex-ac"
                      }
                    >
                      <span>{link && link.num}</span>
                      {link && link.title}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
