import { FileDown, Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section className="  md:mb-[150px] flex z-0 ">
      <div className="container flex flex-col gap-[50px] md-gap-0 md:flex-row justify-between md:px-[80px]  ">
        <div className="order-2 md:order-1 flex flex-col  items-center md:items-start  px-[40px] justify-center gap-[25px]  md:px-[0px]  text-white md:w-2/4 md:p-[80px]  relative  ">
          <img
            className=" w-auto h-auto  absolute  top-[0px] left-0 md:-left-[200px] "
            src="/assets/Vector 8.webp"
            alt="blur"
          />
          <h1 className="text-[38px] text-center md:text-start md:text-[48px] font-bold">
            Michael Diaz <br />{" "}
            <span className="text-[24px] md:text-[34px]">
              Front-end Developer
            </span>
          </h1>

          <p className="text-center md:text-start ">
            Ingeniero Mecanico interesado en el diseño y la programación web.
            <br />
            Me considero una persona proactiva, creativa y siempre dispuesto a
            aprender nuevas habilidades.
          </p>
          <p className="text-center md:text-start ">
            Estudio de forma autodidacta todo lo relacionado con el desarrollo
            Front-End. <br /> Me gustaría medir mis conocimientos y conseguir mi
            primer empleo como desarrollador Junior .
          </p>
          <div className="flex items-center gap-5 z-50 ">
            <a
              target="_blank"
              href="https://github.com/OctopusMichael"
              rel="noreferrer"
            >
              <Github className="text-slate-300  hover:text-blueAquaHover" />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-diaz-1944bb14b/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="text-slate-300 hover:text-blueAquaHover" />
            </a>
            <a
              className=" hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90  opacity-90 p-3  rounded-xl bg-blueAqua hover:bg-blueAquaHover  flex gap-2 items-center"
              href="/assets/hdv/hdv.pdf"
              download="hdv.pdf"
            >
              Descargar CV <FileDown />
            </a>
          </div>
        </div>
        <div className="mt-[70px] md:mt-0 order-1 md:order-2 md:w-2/4 flex   justify-center md:justify-end items-center  ">
          <img
            className=" w-[270px] md:w-[450px] h-auto md:h-[650px] rounded-3xl"
            src="/assets/michael-perfil.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
