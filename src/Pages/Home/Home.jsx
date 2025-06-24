import { DottedLine } from "../../Components/DottedLine/DottedLine.jsx";

import characterImg from "../../assets/imgs/723f4d6a51e1139c6b8de24946526497.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-light-gray px-6 rounded-[40px] text-brown max-h-[780px]">
        <div className="font-logo-donatto text-5xl text-brown pb-3.5 self-start">
          a
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold-mango text-center font-bold tracking-[8px]">
            MIS PROYECTOS
          </h1>
          <p className="text-center leading-5">
            Bienvenidos a los proyectos que he realizado como Frontend
            Developer, en diferentes plataformas.
          </p>
          <div className="flex justify-center items-center gap-2 mt-4 text-3xl text-brown">
            <a
              href="https://www.instagram.com/_.alexdev._/?hl=es"
              target="_blank"
            >
              <i class="ri-instagram-fill"></i>
            </a>
            <a href="https://github.com/AlexanderTejedor" target="_blank">
              <i class="ri-github-fill"></i>
            </a>
            <a href="#">
              <i class="ri-youtube-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-romero-0163b6212/"
              target="_blank"
            >
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </div>
          <a
            href="#"
            className="bg-orange py-2 px-15 mt-5 rounded-full font-bold-mango text-4xl tracking-[3px] cursor-pointer"
          >
            ¡Vamos!
          </a>
        </div>
        <DottedLine />
        <figure className="w-screen mt-10">
          <img
            className="w-[700px] h-[700px] object-cover"
            src={characterImg}
            alt="Frontend developer character illustration"
          />
        </figure>
      </div>
    </>
  );
};

export { Home };
