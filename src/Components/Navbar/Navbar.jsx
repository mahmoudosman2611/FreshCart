import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faBars,
  faBolt,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSuitcaseMedical,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/imgs/freshcart-logo.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <header>
        <div className="container">
          {/* Top Navbar */}
          <div className="hidden lg:flex items-center justify-between border-b border-gray-300 py-2 text-sm">
            <ul className="flex items-center justify-center gap-5">
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
            </ul>
            <ul className="flex items-center justify-center gap-3">
              <li>
                <Link to={`track-order`}>Track order</Link>
              </li>
              <li>
                <Link to={`About`}>About</Link>
              </li>
              <li>
                <Link to={`Contact`}>Contact</Link>
              </li>
              <li>
                <select className="cursor-pointer" name="" id="">
                  <option>EGP</option>
                  <option>SAR</option>
                  <option>AED</option>
                </select>
              </li>
              <li>
                <select className="cursor-pointer" name="" id="">
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>
          {/* Main Navbar */}
          <nav className="flex items-center justify-between py-5 gap-2">
            <h1 className="flex items-center justify-center gap-2 ">
              <Link to={`/`}>
                <img src={Logo} className="w-40" alt="freshCart logo" />
              </Link>
            </h1>
            <search className="hidden lg:block relative">
              <input
                className="form-control min-w-60 "
                type="text"
                placeholder="Search for products"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              />
            </search>

            <ul className="hidden lg:flex items-center gap-8 ">
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return ` ${
                      isActive ? `text-primary-600` : ``
                    } flex flex-col gap-2 hover:text-primary-600 transition-color duration-300`;
                  }}
                  to={`WishList`}
                >
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  <span className="text-sm">Wishlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`Cart`}
                  className={({ isActive }) => {
                    return ` ${
                      isActive ? `text-primary-600` : ``
                    } flex flex-col gap-2 hover:text-primary-600 transition-color duration-300`;
                  }}
                >
                  <div className="relative">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className=" absolute  right-0 top-0 size-5 -translate-y-1/2 rounded-full bg-primary-600 flex item-center justify-center text-white text-sm">
                      3
                    </span>
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`Account`}
                  className={({ isActive }) => {
                    return ` ${
                      isActive ? `text-primary-600` : ``
                    } flex flex-col gap-2 hover:text-primary-600 transition-color duration-300`;
                  }}
                >
                  <FontAwesomeIcon icon={faUser} className="text-xl" />

                  <span className="text-sm">Account</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`SignUp`}
                  className={({ isActive }) => {
                    return ` ${
                      isActive ? `text-primary-600` : ``
                    } flex flex-col gap-2 hover:text-primary-600 transition-color duration-300`;
                  }}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                  <span className="text-sm">Sign up</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`Login`}
                  className={({ isActive }) => {
                    return ` ${
                      isActive ? `text-primary-600` : ``
                    } flex flex-col gap-2 hover:text-primary-600 transition-color duration-300`;
                  }}
                >
                  <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
                  <span className="text-sm">Login</span>
                </NavLink>
              </li>

              <li
                className={`flex flex-col gap-2 hover:text-primary-600 transition-color duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="text-xl"
                />
                <span className="text-sm">Logout</span>
              </li>
            </ul>
            <button
              onClick={toggleMenu}
              className="btn bg-primary-600 text-white text-xl block lg:hidden "
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} className="xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>
        {/* Category Navbar */}
        <nav className="bg-gray-100 py-4 hidden lg:block ">
          <div className="container flex gap-5">
            <div className="relative group">
              <button className="btn bg-primary-600 text-white hover:bg-primary-600/90 flex gap-3 items-center justify-center">
                <FontAwesomeIcon icon={faBars} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <menu className="bg-white hidden group-hover:block transition-all duration-300 min-w-60 absolute top-10  divide-y-2 divide-gray-300/30 shadow  rounded-lg *:py-3 *:px-3 *:hover:bg-gray-100">
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faPerson}
                      fixedWidth
                      className="text-primary-600 text-xl"
                    />
                    <span>men`s Fashions</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faPersonDress}
                      fixedWidth
                      className="text-primary-600 text-xl"
                    />
                    <span>Women`s Fashions</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faBabyCarriage}
                      fixedWidth
                      className="text-primary-600 text-xl"
                    />
                    <span>Baby&Toy</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faSuitcaseMedical}
                      fixedWidth
                      className="text-primary-600 text-xl"
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faBolt}
                      fixedWidth
                      className="text-primary-600 text-xl"
                    />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      fixedWidth
                      className="text-primary-600 text-xl"
                    />
                    <span>View all categories</span>
                  </Link>
                </li>
              </menu>
            </div>

            <ul className="flex items-center justify-center gap-8">
              <li>
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`RecentlyAdded`}>Recently Added</NavLink>
              </li>
              <li>
                <NavLink to={`FeaturedProducts`}>Featured Products</NavLink>
              </li>
              <li>
                <NavLink to={`Offers`}>Offers</NavLink>
              </li>
              <li>
                <NavLink to={`Brands`}>Brands</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* OffCanvas */}



        {isMenuOpen && (
          <>
            <div
              onClick={toggleMenu}
              className="backGround cursor-pointer z-40 fixed inset-0 bg-black/50"
            ></div>
            <div className=" OffCanvas fixed z-50 bg-white top-0 bottom-0  p-5 space-y-5 animate-slide-in">
              <div className="flex items-center justify-between border-b-1 border-gray-300/50 py-5 ">
                <img src={Logo} alt="FreshCart logo" />
                <button onClick={toggleMenu} className="btn ">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <search className="relative ">
                <input
                  className="form-control min-w-60 "
                  type="text"
                  placeholder="Search for products"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                />
              </search>
              <div>
                <h2 className="text-xl font-bold">Main Menu</h2>
                <ul className="  *:hover:bg-gray-100 *:transition-colors *:duration-300 space-y-2 mt-3">
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? `text-primary-600 bg-primary-100` : ``
                        } flex  gap-2 transition-color duration-300 px-2 py-3`;
                      }}
                      to={`WishList`}
                    >
                      <FontAwesomeIcon icon={faHeart} className="text-xl" />
                      <span className="text-sm">Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`Cart`}
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? `text-primary-600 bg-primary-100` : ``
                        } flex  gap-2 transition-color duration-300 px-2 py-3`;
                      }}
                    >
                      <div className="relative">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className=" absolute  right-0 top-0 size-5 -translate-y-1/2 rounded-full bg-primary-600 flex item-center justify-center text-white text-sm">
                          3
                        </span>
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`Account`}
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? `text-primary-600 bg-primary-100` : ``
                        } flex  gap-2 transition-color duration-300 px-2 py-3`;
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} className="text-xl" />

                      <span className="text-sm">Account</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className=" border-t-1 border-gray-300/50 py-5">
                <h2 className="text-xl font-bold ">Account</h2>
                <ul className="  *:hover:bg-gray-100 *:transition-colors *:duration-300 space-y-2 mt-3 ">
                  <li>
                    <NavLink
                      to={`SignUp`}
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? `text-primary-600 bg-primary-100` : ``
                        } flex  gap-2 transition-color duration-300 px-2 py-3`;
                      }}
                    >
                      <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                      <span className="text-sm">Sign up</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`Login`}
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? `text-primary-600 bg-primary-100` : ``
                        } flex  gap-2 transition-color duration-300 px-2 py-3`;
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        className="text-xl"
                      />
                      <span className="text-sm">Login</span>
                    </NavLink>
                  </li>

                  <li
                    className={`flex  gap-2 transition-color duration-300 cursor-pointer px-2 py-3`}
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className="text-xl"
                    />
                    <span className="text-sm">Logout</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
