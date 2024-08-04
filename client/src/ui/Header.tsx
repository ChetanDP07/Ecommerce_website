/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import { IoClose, IoSearchOutline,IoList } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Cresmart from "../assets/Crestmart.jpg";
import Container from "./Container";
import { useEffect, useState } from "react";
import { CategoryProps, ProductProps } from "../../type";
import ProductCard from "./ProductCard";
import { store } from "../lib/store";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { getData } from "../lib";
import { config } from "../../config";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const { currentUser, cartProduct, favoriteProduct } = store();

  const data: any = useLoaderData();
  useEffect(() => {
    setProducts(data?.data);
  }, [data]);

  let [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item: ProductProps) =>
      item?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories/`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const bottomNavigation = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/product" },
    { title: "Cart", link: "/cart" },
    { title: "Blog", link: "/blog" },
    { title: "Orders", link: "/orders" },
    { title: "My Account", link: "/profile" },
  ];

  return (
    <div className="w-full bg-whiteText sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        <Link to="/">
          <img src={Cresmart} alt="logo" className="w-44" />
        </Link>
        <div className="md:inline-flex max-w-2xl w-full relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search products"
            className="w-full flex-1 rounded-full border-0 py-2 text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-inset focus:ring-darkText sm:text-sm sm:leading-6 px-4"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>
        {searchText && (
          <div className="absolute left-0 top-32 w-full mx-auto max-h-[400px] px-28 py-5 bg-white z-20 overflow-y-scroll cursor-pointer text-black shadow-lg shadow-cyan-950 scrollbar-hide">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-5">
                {searchText &&
                  filteredProducts.map((item: ProductProps) => (
                    <ProductCard key={item._id} item={item} setSearchText={setSearchText} />
                  ))}
              </div>
            ) : (
              <div className="py-10 bg-gray-50 w-full flex items-center justify-center border border-gray-600 rounded-md">
                <p className="text-xl font-normal">
                  Nothing matches with your search keywords{" "}
                  {/* <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{`(${searchText})`}</span> */}
                
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-x-6 text-2xl">
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser?.avatar}
                alt="ProfileImage"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <FiUser className="hover:text-cyan-700 duration-200 cursor-pointer" />
            )}
          </Link>
          <Link to="/favorite" className="relative block">
            <FiStar className="hover:text-cyan-700 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
              {favoriteProduct?.length ? favoriteProduct?.length : 0}
            </span>
          </Link>
          <Link to="/cart" className="relative block">
            <FiShoppingBag className="hover:text-cyan-700 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
              {cartProduct?.length ? cartProduct?.length : 0}
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full bg-black text-whiteText">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 text-sm/6 font-semibold text-gray-300 hover:text-white">
              Select Category
              <FaChevronDown />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 focus:outline-none hover:text-white z-50"
              >
                {categories?.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="group flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      <img src={item?.image} className="w-6 h-6 rounded-md" />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>

          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className=" hidden uppercase md:inline-flex text-sm  font-semibold text-whiteText/90 hover:text-white duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform  -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}

          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <IoClose className="w-6 h-6 hover:text-gray-600 duration-200 mr-2" />
            ) : (
              
              <IoList className="w-6 h-6 mr-2 text-gray-300 hover:text-white" />
              
            )}
          </button>
           
          {menuOpen && (
            <div className="absolute top-36  right-0 left-[70%] w-auto bg-gray-50 shadow-md md:hidden border border-gray-500 rounded p-2">
              {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase font-medium flex text-black justify-center py-3  hover:text-white hover:bg-black"
            >
              {title}
            </Link>
          ))}
            </div>
          )}
        </Container>
      </div>

    </div>
  );
};

export default Header;
