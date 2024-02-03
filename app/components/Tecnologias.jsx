"use client";

import React from "react";
import data from "../json/tecnologias.json";
import "atropos/css";
import Atropos from "atropos/react";

const Tecnologias = () => {
  return (
    <section className="mt-[100px] md:mt-[200px] p-4">
      <div className="container flex flex-col gap-[50px]">
        <div className="flex flex-col justify-center items-center gap-[50px] relative ">
          <img
            className=" w-auto h-auto  absolute  -top-[140px] md:-top-[250px] md:right-0  z-0 "
            src="/assets/Vector 8.webp"
            alt="blur"
          />
          <h1 className="text-[48px] text-white text-center font-bold">
            Tecnologías
          </h1>
          <Atropos>
            <div
              data-atropos-offset="0"
              className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-10 bg-slate-800   rounded-xl p-10 z-50"
            >
              {data.map((element) => (
                <div
                  className="flex justify-center cursor-pointer items-center  hover:scale-110 transition-all duration-100 "
                  key={element.id}
                >
                  <img
                    className="w-[120px]"
                    src={element.img}
                    alt={element.name}
                  />
                </div>
              ))}
            </div>
          </Atropos>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
