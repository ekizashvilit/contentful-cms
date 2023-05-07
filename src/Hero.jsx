import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            deserunt recusandae, voluptatibus reiciendis tempora dolorem magni
            nulla eveniet laudantium minima!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="logo" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
