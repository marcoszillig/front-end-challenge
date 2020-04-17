import Head from "next/head";
import Link from "next/link";

const Layout = (props) => {
  const handleMenu = (e) => {
    console.log(e.target);
    document
      .querySelectorAll(".navbar-icon-lines")[1]
      .classList.toggle("deactivated");
    document
      .querySelectorAll(".navbar-icon-lines")[0]
      .classList.toggle("line-a");
    document
      .querySelectorAll(".navbar-icon-lines")[2]
      .classList.toggle("line-b");
    document.querySelector(".navbar__links").classList.toggle("active");
    document.querySelector(".movies").classList.toggle("active");
  };
  return (
    <div className="movies">
      <Head>
        <title>Promobit - Front End Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="header">
        <div className="navbar">
          <div className="navbar__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 584 104.52"
              id="promobit-logo"
            >
              <title>promobit_logo</title>
              <path
                d="M48.67 48q-4.68-1.81-6.36-3.6a6.67 6.67 0 0 1-1.68-4.76 7.39 7.39 0 0 1 1.58-5q1.59-1.83 5-1.83a6.17 6.17 0 0 1 5.14 2.36 8.63 8.63 0 0 1 1.65 4.1 3.46 3.46 0 0 0 3.44 2.84h4.36a3.39 3.39 0 0 0 3.41-3.86 16 16 0 0 0-3.57-8.16q-3.84-4.5-10.8-5.52V16.4h-6.15v8.1c-4.77.47-8.52 2-11.25 4.68a13.87 13.87 0 0 0-4.1 10.45q0 7 4.06 10.62T46.23 57a17 17 0 0 1 6.21 3.56 7 7 0 0 1 1.76 5 6.54 6.54 0 0 1-1.86 5 7.5 7.5 0 0 1-5.41 1.79 8.7 8.7 0 0 1-6.09-2.13 7.4 7.4 0 0 1-2.13-4.49 3.39 3.39 0 0 0-3.38-2.79h-4.44a3.39 3.39 0 0 0-3.42 3.81 14.48 14.48 0 0 0 4.4 9 20.35 20.35 0 0 0 12 4.93V88h6.15v-7.45q7.23-.72 11.31-4.57t4.08-10.52q0-6.82-4-10.47T48.67 48z"
                fill="#fff"
              ></path>
              <path
                d="M48.67 48q-4.68-1.81-6.36-3.6a6.67 6.67 0 0 1-1.68-4.76 7.39 7.39 0 0 1 1.58-5q1.59-1.83 5-1.83a6.17 6.17 0 0 1 5.14 2.36 8.63 8.63 0 0 1 1.65 4.1 3.46 3.46 0 0 0 3.44 2.84h4.36a3.39 3.39 0 0 0 3.41-3.86 16 16 0 0 0-3.57-8.16q-3.84-4.5-10.8-5.52V16.4h-6.15v8.1c-4.77.47-8.52 2-11.25 4.68a13.87 13.87 0 0 0-4.1 10.45q0 7 4.06 10.62T46.23 57a17 17 0 0 1 6.21 3.56 7 7 0 0 1 1.76 5 6.54 6.54 0 0 1-1.86 5 7.5 7.5 0 0 1-5.41 1.79 8.7 8.7 0 0 1-6.09-2.13 7.4 7.4 0 0 1-2.13-4.49 3.39 3.39 0 0 0-3.38-2.79h-4.44a3.39 3.39 0 0 0-3.42 3.81 14.48 14.48 0 0 0 4.4 9 20.35 20.35 0 0 0 12 4.93V88h6.15v-7.45q7.23-.72 11.31-4.57t4.08-10.52q0-6.82-4-10.47T48.67 48z"
                fill="#faba01"
              ></path>
              <path
                d="M74.75 8H16.08A15.87 15.87 0 0 0 0 23.62v57.13A15.87 15.87 0 0 0 16.08 96.4h58.67a15.87 15.87 0 0 0 16.08-15.65V23.62A15.87 15.87 0 0 0 74.75 8zM61.37 76q-4.08 3.85-11.31 4.57V88h-6.15v-7.41a20.35 20.35 0 0 1-12-4.93 14.48 14.48 0 0 1-4.4-9 3.39 3.39 0 0 1 3.42-3.81h4.44a3.39 3.39 0 0 1 3.38 2.79 7.4 7.4 0 0 0 2.13 4.49 8.7 8.7 0 0 0 6.09 2.13 7.5 7.5 0 0 0 5.41-1.79 6.54 6.54 0 0 0 1.86-5 7 7 0 0 0-1.76-5A17 17 0 0 0 46.23 57q-8.77-3.07-12.83-6.73t-4.06-10.64a13.87 13.87 0 0 1 4.1-10.45c2.73-2.64 6.48-4.21 11.25-4.68v-8.1h6.15v8.17q7 1 10.8 5.52a16 16 0 0 1 3.57 8.16 3.39 3.39 0 0 1-3.41 3.86h-4.38A3.46 3.46 0 0 1 54 39.27a8.63 8.63 0 0 0-1.64-4.06 6.17 6.17 0 0 0-5.14-2.36q-3.41 0-5 1.83a7.39 7.39 0 0 0-1.58 5 6.67 6.67 0 0 0 1.68 4.76Q44 46.22 48.67 48q8.7 3.3 12.74 7t4 10.47q.04 6.65-4.04 10.53z"
                fill="#fff"
              ></path>
              <path
                d="M140.61 54a13.54 13.54 0 0 0 3.39 9.51q3.36 3.66 9.43 3.65t9.43-3.65a13.58 13.58 0 0 0 3.32-9.51 13.61 13.61 0 0 0-3.35-9.56q-3.36-3.65-9.43-3.65T144 44.4a13.57 13.57 0 0 0-3.39 9.6zm-14.7-26.09h14.7v6.87h.22a17 17 0 0 1 2.5-2.84 19 19 0 0 1 3.67-2.67 22.22 22.22 0 0 1 4.53-1.93 17.71 17.71 0 0 1 5.22-.76 26.54 26.54 0 0 1 10.44 2 23.46 23.46 0 0 1 8.05 5.58 25 25 0 0 1 5.16 8.54 31.17 31.17 0 0 1 1.82 10.84A33.17 33.17 0 0 1 180.51 64a29 29 0 0 1-4.68 8.85 22.88 22.88 0 0 1-7.41 6.15 20.88 20.88 0 0 1-9.91 2.31 27.21 27.21 0 0 1-9.32-1.56 14.85 14.85 0 0 1-7.09-5.31h-.21v30.06h-16zm64.29-.03h16.45v8.42h.22a20.07 20.07 0 0 1 6.25-7.3 16 16 0 0 1 9.1-2.43c.95 0 1.9 0 2.85.11a15.82 15.82 0 0 1 2.64.43v14.8a25.36 25.36 0 0 0-3.46-.81 22.65 22.65 0 0 0-3.56-.27 17.62 17.62 0 0 0-7.46 1.3 9.87 9.87 0 0 0-4.23 3.61 13.53 13.53 0 0 0-1.92 5.56 53.64 53.64 0 0 0-.44 7.12v21.91H190.2zM246 53.46a13.39 13.39 0 0 0 3.28 9.38q3.28 3.59 9.22 3.58t9.22-3.58a13.35 13.35 0 0 0 3.28-9.38 13.33 13.33 0 0 0-3.29-9.38q-3.27-3.59-9.22-3.58t-9.22 3.58a13.37 13.37 0 0 0-3.27 9.38m-15.62 0a27.1 27.1 0 0 1 2.18-11.07 25.53 25.53 0 0 1 6-8.48 26.67 26.67 0 0 1 9-5.43 32.73 32.73 0 0 1 22 0 26.48 26.48 0 0 1 9 5.43 25.25 25.25 0 0 1 6 8.48 27.11 27.11 0 0 1 2.19 11.07 27.06 27.06 0 0 1-2.19 11.06 25.29 25.29 0 0 1-6 8.49 26.48 26.48 0 0 1-9 5.43 32.9 32.9 0 0 1-22 0 26.67 26.67 0 0 1-9-5.43 25.57 25.57 0 0 1-6-8.49 27.06 27.06 0 0 1-2.18-11.06m66.98-25.58h15.15V35h.21a13.33 13.33 0 0 1 2.1-3 15.58 15.58 0 0 1 3.26-2.7 18.31 18.31 0 0 1 4.31-1.94 17.74 17.74 0 0 1 5.26-.76 19.56 19.56 0 0 1 9.52 2.27 14.23 14.23 0 0 1 6.26 7.13 17.28 17.28 0 0 1 6.63-7.23 19.57 19.57 0 0 1 9.57-2.16 19.07 19.07 0 0 1 8.68 1.79 14.26 14.26 0 0 1 5.58 4.85 21 21 0 0 1 2.94 7.23 42.06 42.06 0 0 1 .89 8.91v31H362v-30.6a12.43 12.43 0 0 0-1.53-6.32c-1-1.76-2.82-2.64-5.42-2.64a10.19 10.19 0 0 0-4.57.92 7.66 7.66 0 0 0-2.95 2.53 10.91 10.91 0 0 0-1.58 3.78 21.47 21.47 0 0 0-.47 4.53v27.74h-15.83V52.59c0-.93 0-2.08-.1-3.45a14.12 14.12 0 0 0-.74-3.88 7.34 7.34 0 0 0-2.05-3.13 5.94 5.94 0 0 0-4.16-1.3 9.58 9.58 0 0 0-4.94 1.17 7.65 7.65 0 0 0-2.89 3 12.5 12.5 0 0 0-1.32 4.26 37.74 37.74 0 0 0-.31 5v26.07h-15.78zm106.71 25.58a13.34 13.34 0 0 0 3.28 9.38q3.28 3.59 9.22 3.58t9.22-3.58a13.34 13.34 0 0 0 3.28-9.38 13.33 13.33 0 0 0-3.28-9.38q-3.29-3.59-9.22-3.58t-9.22 3.58a13.33 13.33 0 0 0-3.28 9.38m-15.63 0a27.11 27.11 0 0 1 2.19-11.07 25.39 25.39 0 0 1 6-8.48 26.48 26.48 0 0 1 9-5.43 32.73 32.73 0 0 1 22 0 26.58 26.58 0 0 1 9 5.43 25.53 25.53 0 0 1 6 8.48 27.11 27.11 0 0 1 2.19 11.07 27.06 27.06 0 0 1-2.19 11.06 25.57 25.57 0 0 1-6 8.49 26.58 26.58 0 0 1-9 5.43 32.9 32.9 0 0 1-22 0 26.48 26.48 0 0 1-9-5.43 25.43 25.43 0 0 1-6-8.49 27.06 27.06 0 0 1-2.19-11.06m81.69-.02a13 13 0 0 0 3.33 9.27q3.33 3.54 9.36 3.54t9.35-3.54a13 13 0 0 0 3.33-9.27 13 13 0 0 0-3.33-9.27q-3.33-3.54-9.35-3.54t-9.36 3.54a13 13 0 0 0-3.33 9.27zM455.54 0h15.86v33.54h.21a14.7 14.7 0 0 1 7-5.15 27.53 27.53 0 0 1 9.25-1.51 21 21 0 0 1 9.83 2.24 22.63 22.63 0 0 1 7.35 6 27.71 27.71 0 0 1 4.65 8.59 31.26 31.26 0 0 1 1.64 10.16 29.94 29.94 0 0 1-1.79 10.52 24.2 24.2 0 0 1-5.13 8.28 22.93 22.93 0 0 1-8 5.41A26.71 26.71 0 0 1 486.09 80a17.82 17.82 0 0 1-5.18-.73 22.3 22.3 0 0 1-4.49-1.87 19.53 19.53 0 0 1-3.6-2.55 17.42 17.42 0 0 1-2.48-2.76h-.21v6.66h-14.59zM521 80.33h16.17V28.16H521zm-1.29-68.59a9 9 0 0 1 2.74-6.6 9.39 9.39 0 0 1 13.26 0 9 9 0 0 1 2.75 6.6 9 9 0 0 1-2.75 6.6 9.39 9.39 0 0 1-13.26 0 9 9 0 0 1-2.74-6.6zM584 40.77h-14v17a31.86 31.86 0 0 0 .21 3.82 7.53 7.53 0 0 0 1 3 4.78 4.78 0 0 0 2.28 1.94 10.36 10.36 0 0 0 4.1.68 27 27 0 0 0 3.34-.27 5.67 5.67 0 0 0 3.14-1.2v13.02a24.3 24.3 0 0 1-5.6 1.24 51.52 51.52 0 0 1-5.63.31 30.91 30.91 0 0 1-7.44-.84 17 17 0 0 1-6-2.66 12.45 12.45 0 0 1-4-4.77A16 16 0 0 1 554 65V40.77h-10.2V28.22H554V13.15h16v15.07h14z"
                fill="#fff"
              ></path>
            </svg>
            <span className="navbar__logo-desc">Front End Chanllend</span>
          </div>
          <div className="navbar__icon__container">
            <div className="navbar__icon" onClick={handleMenu}>
              <span className="navbar-icon-lines"></span>
              <span className="navbar-icon-lines" data-src="1"></span>
              <span className="navbar-icon-lines"></span>
            </div>
          </div>
          <nav className="navbar__links">
            <ul className="navbar__list">
              <li>
                <Link href="/">
                  <a className="navbar__link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="navbar__link">Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="navbar__link">Contato</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">{props.children}</div>
      <footer className="footer">
        <p className="footer-desc">Developed by Marcos Zillig</p>
      </footer>

      <style jsx>{`
        body {
          margin: 0;
        }
        .movies {
          background-color: #222;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .header {
          background-color: #ffb900;
        }
        .navbar {
          width: 80%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
        }
        .navbar__logo {
          display: flex;
          flex-direction: column;
        }
        .navbar__logo svg {
          width: 200px;
        }
        .navbar__logo-desc {
          font-family: "Poppins", sans-serif;
          color: #000;
          font-weight: 400;
          font-size: 0.8rem;
        }
        .navbar__list {
          list-style: none;
          display: flex;
          align-items: center;
          padding: 0;
        }
        .navbar__list li {
          padding: 0 16px;
        }
        .navbar__link {
          text-decoration: none;
          font-family: "Poppins", sans-serif;
          color: #000;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
        }
        .navbar__link :hover {
          color: red;
        }
        .container {
          flex: 1;
        }
        .footer {
          align-self: center;
        }
        .footer-desc {
          font-family: "Poppins", sans-serif;
          color: #ddd;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
          padding: 4px;
        }

        @media only screen and (max-width: 720px) {
          .movies.active {
            max-height: 100vh;
            overflow: hidden;
          }
          .header {
            position: sticky;
            top: 0;
            width: 100vw;
            z-index: 1;
          }
          .navbar {
            flex-direction: column;
            justify-content: flex-start;
            position: sticky;
            top: 0;
          }
          .navbar.active {
            height: 100vh;
          }
          .navbar .navbar__icon__container {
            position: fixed;
            right: 16px;
            top: 24px;
          }

          .navbar .navbar__icon {
            position: relative;
            cursor: pointer;
            width: 30px;
            margin-left: auto;
          }

          .navbar .navbar__icon .navbar-icon-lines {
            width: 100%;
            height: 3px;
            background: #000;
            display: block;
            position: absolute;
            top: 8px;
            transition: all 0.4s ease-in-out;
            opacity: 1;
          }
          .navbar .navbar__icon .navbar-icon-lines:first-child {
            top: 0;
          }
          .navbar .navbar__icon .navbar-icon-lines:last-child {
            top: 16px;
          }
          .navbar .navbar__icon .navbar-icon-lines.deactivated {
            opacity: 0;
          }
          .navbar .navbar__icon .navbar-icon-lines.line-a {
            top: 8px;
            transform: rotate(315deg);
            background: #fff;
          }
          .navbar .navbar__icon .navbar-icon-lines.line-b {
            top: 8px;
            transform: rotate(-315deg);
            background: #fff;
          }
          .navbar .navbar__links {
            height: 0;
            overflow: hidden;
            transition: height 0.3s ease-in-out;
          }
          .navbar .navbar__links.active {
            height: 100vh;
          }
          .navbar__list {
            flex-direction: column;
            justify-content: space-evenly;
            max-height: 60%;
          }
          .navbar__link {
            font-size: 2rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
export default Layout;
