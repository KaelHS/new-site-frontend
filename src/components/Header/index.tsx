"use client"
import Image from "next/image";
import { useState } from "react";
// import { close, logo, menu } from "../assets";
import logoHeader from '../../../public/logoHeader.svg'

export const navLinks = [
  {
    id: "catalog",
    title: "Catálogo de projetos",
  },
  {
    id: "why",
    title: "Por que o 123Projetei?",
  },
  {
    id: "calculator",
    title: "Calculadora de obra",
  },
  {
    id: "about",
    title: "Quem somos",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "login",
    title: "Login",
  },
];

export const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-20 flex px-6 justify-between items-center absolute top-0 left-0 right-0">
      {/* Logo */}
      <h1 className="text-3xl text-white">
        <Image src={logoHeader} height={40} alt="logo 123Projetei" />
      </h1>
      
      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        /> */}
        {/* <Image src={logoHeader} height={40} alt="logo 123Projetei" /> */}


        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="text-white ml-6 bg-transparent hover:bg-blue text-blue-dark hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Agende uma reunião
        </button>
    </nav>
  );
};