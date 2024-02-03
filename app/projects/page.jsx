import {
  ArrowLeft,
  ArrowUpRightFromSquare,
  Github,
  MoveRight,
} from "lucide-react";
import React from "react";
import data from "../json/projects.json";
import Link from "next/link";

const newData = data.reverse();

const page = () => {
  return (
    <section className="mt-[100px] md:mt-[100px] ">
      <div className="container flex flex-col gap-[50px] ">
        <div className="flex flex-col justify-center items-center gap-[50px] relative ">
          <img
            className=" w-[400px] h-[400px]  absolute  -top-[140px] md:-top-[100px] md:right-[400px]   "
            src="/assets/Vector 8.webp"
            alt="blur"
          />
          <Link
            href="/"
            className=" md:hidden flex gap-5  w-[150px]   justify-center p-2 px-3  bg-blueAqua hover:bg-blueAquaHover text-white rounded-xl font-bold z-[100] "
          >
            {" "}
            <ArrowLeft /> Atras{" "}
          </Link>
          <h1 className="text-[48px] text-white text-center font-bold">
            Proyectos
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer   place-items-center      md:gap-x-[100px] gap-y-[100px]">
          {newData.map((e) => (
            <div
              data-atropos-offset="0"
              className="flex flex-col px-[40px] md:px-[0px]  p-5 rounded-xl  gap-5"
              key={e.id}
            >
              <picture className="px-4">
                <img className="" src={e.img} alt={e.name} />
              </picture>
              <div className="flex flex-col  justify-center items-center gap-2 px-5 md:p-0  ">
                <h1 className=" text-[20px] md:text-[30px] text-center font-bold text-white hover:text-blueAquaHover">
                  {e.name}{" "}
                </h1>
                <div className=" flex gap-5  justify-center items-center">
                  <a
                    href={`${e.site}`}
                    target="_blank"
                    font-bold
                    className=" flex gap-5  w-[150px]   justify-center p-2 px-3  bg-blueAqua hover:bg-blueAquaHover text-white rounded-xl font-bold  "
                  >
                    {" "}
                    Site <ArrowUpRightFromSquare />
                  </a>
                  <a className="flex gap-5  w-[150px]   justify-center p-2 px-3  bg-blueAqua hover:bg-blueAquaHover text-white rounded-xl  font-bold ">
                    Code <ArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
