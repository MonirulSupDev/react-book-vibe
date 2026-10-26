import { NavLink } from "react-router";
import logoLight from "../../assets/images/logos/book-vibe-logo-light.svg";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/listed-books">Listed Books</NavLink>
      <NavLink to="/pages-to-read">Pages to Read</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 p-0 py-12 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-green-500"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu-sm dropdown-content flex flex-col bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a href="#">
          {logoLight && (
            <img src={logoLight} alt="Book Vibe Logo" className="h-8" />
          )}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-10">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="primary-btn">Sign In</a>
        <a className="secondary-btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
