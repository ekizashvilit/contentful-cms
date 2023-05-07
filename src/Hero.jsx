import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>
            Welcome to my collection of React projects! This is a showcase of my
            skills and creativity as a web developer, featuring a range of
            innovative and interactive projects built with the popular
            JavaScript library, React. Each project is designed to demonstrate
            my ability to create engaging and dynamic web applications, and to
            showcase my passion for coding. From stunning visuals to intuitive
            user interfaces, you'll find a diverse range of projects here that
            are sure to inspire and impress. So go ahead and explore, and feel
            free to contact me if you have any questions or feedback!
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
