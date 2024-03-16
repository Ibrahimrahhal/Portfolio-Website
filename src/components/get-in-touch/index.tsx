import "@components/get-in-touch/index.scss";
import Animation from "@components/animation";
import { PinContainer } from "@components/3d-pin";

const animationOptions = {
  loop: true,
  autoplay: true,
};
const openMail = () => {
  window.open("mailto:ibrahim.rahhal3636@gmail.com");
}
export default () => {
  return (
    <div className="get-in-touch" id="get-in-touch">
      <h1 className="get-in-touch__title">Get in Touch</h1>
      <div onClick={openMail}>
      <PinContainer
        title="Send me an email"
        href="mailto:ibrahim.rahhal3636@gmail.com"
      > <div className="get-in-touch__animation-wrapper">
      <Animation options={animationOptions} animation="friends" />
    </div></PinContainer>
      </div>
     
      <p className="get-in-touch__desc">
        I'm always excited to connect with new people and make some friendships.
        If you'd like to get in touch, please don't hesitate to send me an email or connect with me on social media{" "}
        <div>I'm looking forward to getting to know you!</div>
      </p>
      {/* <div className="get-in-touch__actions">
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
      </div> */}
    </div>
  );
};
