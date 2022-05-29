import "./contacts.css";
import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wpeunfb",
      "template_1uq728l",
      form.current,
      "vsUgykm9dSmHiI7DV"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>&lt; Contact Me /&gt;</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <span className="tags top-tags">&lt; article &gt;</span>

          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>akshay.k.eklare@gmail.com</h5>
            <a
              href="mailto:akshay.k.eklare@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <a href="tel:+919980254574">
            <article className="contact_option">
              <IoCallOutline className="contact_option-icon" />
              <h4>Call Me On</h4>
              <h5>+91-9980254574</h5>
              {/* <a href="mailto:akshay.k.eklare@gmail.com">Send a Message</a> */}
            </article>
          </a>

          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-9980254574</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9980254574"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <span className="tags bottom-tags">&lt;/ article &gt;</span>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <span className="tags top-tags">&lt; form &gt;</span>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message Please"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <span className="tags bottom-tags">&lt;/ form &gt;</span>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
