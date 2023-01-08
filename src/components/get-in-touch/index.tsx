import "@components/get-in-touch/index.scss";
import Animation from "@components/animation";

const animationOptions = {
  loop: true,
  autoplay: true,
};
export default () => {
  return (
    <div className="get-in-touch" id="get-in-touch">
      <h1 className="get-in-touch__title">Get in Touch</h1>
      <div className="get-in-touch__animation-wrapper">
        <Animation options={animationOptions} animation="friends" />
      </div>
      <p className="get-in-touch__desc">
        I'm always excited to connect with new people and make some friendships.
        If you'd like to get in touch, please don't hesitate to send me an email
        or book a slot in my calender.{" "}
        <div>I'm looking forward to getting to know you!</div>
      </p>
      <div className="get-in-touch__actions">
        <a
          target="_blank"
          href="https://calendar.app.google/MRkkEtRtGCHHhqY99"
          className="btn btn__calender"
        >
          Book a Slot
        </a>
        <a href="mailto:ibrahim.rahhal3636@gmail.com" className="btn">
          Send an Email
        </a>
      </div>
    </div>
  );
};
