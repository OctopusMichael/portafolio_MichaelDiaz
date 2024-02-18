"use client";

import { ArrowUpRightFromSquare, Github, MoveRight } from "lucide-react";
import data from "../json/projects.json";
import Link from "next/link";
import Atropos from "atropos/react";

const newData = data.reverse();

const Projects = () => {
  return (
    <section className="mt-[150px] md:mt-[200px] flex z-20  ">
      <div className="md:container flex flex-col gap-[50px] ">
        <div className="flex flex-col justify-center items-center gap-[50px] relative ">
          <img
            className=" w-auto h-auto  absolute  -top-[140px] md:-top-[250px] md:right-0  "
            src="/assets/Vector 8.webp"
            alt="blur"
          />
          <h1 className="text-[48px] text-white text-center font-bold">
            Proyectos
          </h1>

          <Link
            href="/projects"
            className="hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90  opacity-90 hover:opacity-100  font-bold h-[50px] rounded-xl bg-transpartent border border-solid border-blueAqua hover:bg-blueAquaHover text-white  w-[200px] flex justify-center items-center gap-2 p-5 z-10"
          >
            ver mas <MoveRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer place-items-center      md:gap-x-[100px] gap-y-[50px] md:gap-y-[100px]">
          {newData.slice(0, 4).map((e) => (
            <>
              <Atropos>
                <div
                  data-atropos-offset="0"
                  className="md:flex flex-col px-[40px] md:px-[0px]  p-6 rounded-xl  gap-5 hover:bg-slate-800 hidden"
                  key={e.id}
                >
                  <picture className="px-4">
                    <img src={e.img} alt={e.name} />
                  </picture>

                  <div className="flex flex-col  justify-center items-center gap-2 px-5 md:p-0  ">
                    <h1 className="text-[20px] md:text-[30px] font-bold text-white text-center  hover:text-blueAquaHover">
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
                      <a
                        href={`${e.code}`}
                        target="_blank"
                        font-bold
                        className=" flex gap-5  w-[150px]   justify-center p-2 px-3  bg-blueAqua hover:bg-blueAquaHover text-white rounded-xl font-bold  "
                      >
                        {" "}
                        Code <ArrowUpRightFromSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </Atropos>
              <div
                className="flex flex-col px-[40px] md:px-[0px]   p-6 rounded-xl  gap-5 -800 md:hidden "
                key={e.id}
              >
                <picture className="  ">
                  <img
                    /* className="w-[400px] h-auto"  */ src={e.img}
                    alt={e.name}
                  />
                </picture>

                <div className="flex flex-col  justify-center items-center gap-2 px-5 md:p-0  ">
                  <h1 className="text-[20px] md:text-[30px] font-bold text-white text-center  hover:text-blueAquaHover">
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
                    <a
                      href={`${e.code}`}
                      target="_blank"
                      font-bold
                      className=" flex gap-5  w-[150px]   justify-center p-2 px-3  bg-blueAqua hover:bg-blueAquaHover text-white rounded-xl font-bold  "
                    >
                      {" "}
                      Code <ArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
