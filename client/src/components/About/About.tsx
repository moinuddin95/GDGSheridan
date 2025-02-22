import "./About.css";
import BookAnimation from "../UI/BookAnimation/BookAnimation";
import useShowAnimation from "../../hooks/useShowAnimation";
function About() {
  useShowAnimation("#About > h1", 100);
  useShowAnimation("#About > h3", 100);
  return (
    <section id="About">
      <h1>About</h1>
      <h3>
        Through Google Developers Group Club, members will embark on an
        ever-evolving journey into the world of mobile and web development.
        Whether you are a beginner or an experienced developer, the GDG offers a
        broad selection of resources and networking opportunities to cater to
        your development needs. Throughout the club's monthly events, workshops,
        and hackathons, members will have the opportunity to collaborate with
        like-minded individuals, learn from industry professionals, and take
        part in hands-on coding initiatives.
      </h3>
      <BookAnimation />
    </section>
  );
}

export default About;
