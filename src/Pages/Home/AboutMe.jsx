export default function AboutMe() {
  const phoneNumber = "123-456-7890";
  const callPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/abme.png" alt="AboutMe"></img>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Personal Info</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            My name is Devanshu Dudhia and I'm currently working in Bosch as a
            senior software engineer. As a full-stack developer, my expertise
            lies in creating seamless and intuitive user experiences. I
            specialize in using cutting-edge technologies to produce
            high-quality web applications. Specifically, I have vast knowledge
            of ReactJs and NodeJs, which allow me to build complex and dynamic
            applications with ease.
          </p>
          <p className="hero--section-description">
            I'm also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding web applications. I
            would love to hear from you. Whether it's a project, job
            opportunity, or just a chat. Feel free to contact me.
          </p>
        </div>
      </div>
    </section>
  );
}
