import characterImg from "../../assets/723f4d6a51e1139c6b8de24946526497.png";

const Home = () => {
  return (
    <>
      <div>a</div>
      <div>
        <h1>MIS PROYECTOS</h1>
        <p>
          Bienvenidos a los proyectos que he realizado como Frontend Developer,
          en diferentes plataformas.
        </p>
        <div>
          <a href="#">
            <i class="ri-instagram-fill"></i>
          </a>
          <a href="#">
            <i class="ri-github-fill"></i>
          </a>
          <a href="#">
            <i class="ri-youtube-fill"></i>
          </a>
          <a href="#">
            <i class="ri-linkedin-box-fill"></i>
          </a>
        </div>
        <a href="#">¡Vamos!</a>
      </div>
      <span></span>
      <figure>
        <img
          src={characterImg}
          alt="Frontend developer character illustration"
        />
      </figure>
    </>
  );
};

export { Home };
