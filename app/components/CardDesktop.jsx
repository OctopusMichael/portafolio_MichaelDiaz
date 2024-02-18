import React from "react";

const CardDesktop = ({e}) => {
  return (
    <Atropos>
      <div
        data-atropos-offset="0"
        className="flex flex-col px-[40px] md:px-[0px]  p-6 rounded-xl  gap-5 hover:bg-slate-800"
        key={e.id}
      >
        <picture className="px-4">
          <img /* className="w-[400px] h-auto"  */ src={e.img} alt={e.name} />
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
  );
};

export default CardDesktop;
