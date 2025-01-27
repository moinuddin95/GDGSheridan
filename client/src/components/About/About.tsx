import "./About.css";
import { useState, useEffect, useRef } from "react";
function About() {
  const [animate, setAnimate] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScrollForAnimation = () => {
      if(bookRef.current)
        if(window.scrollY > bookRef.current.getBoundingClientRect().top)
          bookRef.current.classList.add('turn');
    };
    window.addEventListener('scroll', handleScrollForAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollForAnimation);
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
      <div className="book" ref={bookRef}>
        <span className="page"></span>
        <span className="page"></span>
        <span className="page"></span>
        <span className="page"></span>
        <span className="page"></span>
        <span className="cover"></span>
        <span className="page"></span>
        <span className="cover"></span>
      </div>
    </section>
  );
}

export default About;
