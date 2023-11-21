import { Link } from "react-router-dom";

export default function HeroSection() {
  const openLink = () => {
    // Replace 'https://example.com' with your desired URL
    window.open(
      "https://drive.google.com/file/d/1DuuKqOKqGtiBVKwjLt6yLUJoYT7gT_u2/view",
      "_blank"
    );
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          {/* <p className="section--title">Hey,I'm Devanshu Dudhia</p> */}
          <h1 className="hero-section--title">
            <span className="hero--section-title--color">
              Hi,
              <br /> I'm <span className="name_color">
                Devanshu
              </span> <br /> Full Stack Developer.
            </span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            {/* I'm a full-stack developer with a passion for building user-friendly
            and beautiful websites. */}
            {/* I have a strong understanding of both
            front-end and back-end development, and i am excited to put my
            skills to use in a professional setting.
            <br /> I am a quick learner and a team player , and i am confident
            that i can be a valuable asset to any web development team. */}
          </p>

          <button className="btn btn-primary" onClick={openLink}>
            My resume
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/dev.png" alt="hero_section"></img>
      </div>
    </section>
  );
}
