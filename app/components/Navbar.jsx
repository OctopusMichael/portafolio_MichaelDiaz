"use client";

import Link from "next/link";

const Navbar = () => {
  const menu = [
    {
      id: 0,
      name: "Home",
      route: "/",
    },

    {
      id: 1,
      name: "Proyectos",
      route: "/projects",
    },
    {
      id: 2,
      name: "Cursos",
      route: "/#Cursos",
    },
    {
      id: 3,
      name: "Contacto",
      route: "/#Contacto",
    },
  ];
  return (
    <nav className="hidden  container p-[80px] md:p-0 md:px-[80px] md:flex justify-center md:justify-between items-center   mb-[50px] z-40">
      <div className="">
        <a className="relative" href="#">
          {" "}
          <img
            className="w-[200px] md:w-[150px] h-auto"
            src="/assets/logoOctopus.webp"
            alt="logo OctopusDev"
          />
        </a>
      </div>
      <ul className=" hidden  md:flex items-center gap-[60px]">
        {menu.map((e) => (
          <li key={e.id}>
            <Link
              href={`${e.route}`}
              className={`${
                e.id === 3
                  ? "bg-black border-2 border-[#9EA3AE]  hover:bg-blueAquaHover hover:border-black hover:border-2 hover:text-black  rounded-3xl   p-3 text-white font-bold"
                  : "text-[#9EA3AE] hover:text-white hover:underline"
              } uppercase text-[14px] transition-all duration-150 ease-linear`}
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
