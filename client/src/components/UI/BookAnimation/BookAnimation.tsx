import "./BookAnimation.css";
import useAnimate from "../../../hooks/useBookAnimate";
function BookAnimation() {
  useAnimate();
  return (
    <div id="book">
      <span className="page"></span>
      <span className="page"></span>
      <span className="page"></span>
      <span className="page"></span>
      <span className="page"></span>
      <span className="page"></span>
      <span className="page"></span>
      <span className="page"></span>
      <span className="cover"></span>
      <span className="page"></span>
      <span className="cover"></span>
    </div>
  );
}

export default BookAnimation;
