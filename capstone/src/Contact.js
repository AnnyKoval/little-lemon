 import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="contact__container">
        <div className="contact__container-block">
         
          <div className="contacts">
            <div className="address_block">
              <h2 className="contact_block">
                ADDRESS
              </h2>
              <p className="street_name">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="contact_call">
              <h2 className="contact_block">
                EMAIL
              </h2>
              <p className="name_email">
                littlelemon@email.com
              </p>
              <h2 className="contact_block">
                PHONE
              </h2>
              <p>123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="form_contacts">
          <h2 className="title_booking">
            TABLE BOOKING
          </h2>
          <div className="label_wrapper">
            <label htmlFor="name" className="label_name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label_wrapper">
            <label htmlFor="email" className="label_name">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input_name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="label_wrapper">
            <label htmlFor="name" className="label_name">
              Date
            </label>
            <input
              type="date"
              id="name"
              name="name"
              className="input_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label_wrapper">
            <label htmlFor="name" className="label_name">
              Time
            </label>
            <input
              type="time"
              id="name"
              name="name"
              className="input_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label_wrapper">
            <label htmlFor="name" className="label_name">
              Persons
            </label>
            <input
              type="number"
               min="1" max="50"
              id="name"
              name="name"
              className="input_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label_wrapper">
            <label
              htmlFor="message"
              className="label_name">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="input_name"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
