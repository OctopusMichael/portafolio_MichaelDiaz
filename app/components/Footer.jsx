import logo from "../assets/logoOctopus.webp";
import {
  FacebookIcon,
  Github,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
/* import blur from "../assets/Vector 8.png" */
const Footer = () => {
  return (
    <footer id="Contacto" className="bg-[#131313]">
      <div className="container   text-white ">
        <div className="flex flex-col gap-2 md:mb-[0px] p-[50px] justify-center items-center">
          <h3 className="text-[20px] md:text-[28px] text-blueAqua">
            Contáctame
          </h3>
          <h1 className="text-[24px] md:text-[48px] underline hover:text-blueAquaHover cursor-pointer">
            Michaeldiazcampo@gmail.com
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <a href="#">
            <img
              className="w-[200px] h-auto "
              src="/assets/logoOctopus.webp"
              alt="logo Octopus"
            />
          </a>
          <div className="flex flex-col  text-center md:text-start gap-2 text-[24px] md:text-[30px]">
            <h1>Santa marta, Colombia</h1>
            <h1>321-694-8469</h1>
          </div>

          <div className="flex flex-col gap-2 text-[24px] md:text-[30px]">
            <h1></h1>
            <div className="flex  justify-center md:justify-start gap-2">
              <a
                target="_blank"
                href="https://github.com/OctopusMichael"
                rel="noreferrer"
                className="hover:text-blueAquaHover"
              >
                <Github />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/michael-diaz-1944bb14b/"
                rel="noreferrer"
                className="hover:text-blueAquaHover"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <hr className="h-px bg-[#F4F4F6] my-[10px] " />
        <h1 className="text-center mt-[20px] text-[20px] md:text-[30px]">
          © 2023. <a href=""></a> Michael Diaz .{" "}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
