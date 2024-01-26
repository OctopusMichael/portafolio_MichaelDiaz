import data from "../json/certificados.json";

const Testimonials = () => {
  return (
    <section id="Cursos" className="mt-[200px] ">
      <div className="container ">
        <div className=" flex-col flex gap-5 text-white p-[40px] md:p-[80px]  relative">
          <img
            className=" w-auto h-auto absolute -top-[50px] left-0 md:-top-[150px] md:-left-[200px] z-0"
            src="/assets/Vector 8.webp"
            alt="blur"
          />
          <h1 className="text-[38px] md:text-[48px] font-bold ">Cursos</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2    gap-[50px]  ">
             {data.reverse().map(e => (
              <div key={e.id} className="flex flex-col  gap-5 ">
                <img  className="md:w-[600px] md:h-[400px]" src={e.img} alt="" />
                <h1 >{e.name}</h1>
                <h1> {e.institute} </h1>
                <h1>{e.date}</h1>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
