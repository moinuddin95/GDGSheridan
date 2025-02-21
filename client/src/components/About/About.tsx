import "./About.css";
import BookAnimation from "../UI/BookAnimation/BookAnimation";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    const abouth1 = document.querySelector("#About h1");
    const abouth3 = document.querySelector("#About h3");
    const addShow = () => {
      if (abouth1) {
        const top = abouth1.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) abouth1.classList.add("show");
        else if (abouth1.classList.contains("show"))
          abouth1.classList.remove("show");
      }
      if (abouth3) {
        const top = abouth3.getBoundingClientRect().top;
        if (top < window.innerHeight - 25) abouth3.classList.add("show");
        else if (abouth3.classList.contains("show"))
          abouth3.classList.remove("show");
      }
      
    };
    window.addEventListener("scroll", addShow);
    return () => {
      window.removeEventListener("scroll", addShow);
    };
  }, []);
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
