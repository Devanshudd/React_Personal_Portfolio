import { Button } from "react-scroll";
import emailjs from "emailjs-com";
import React, { useState } from "react";

// Initialize EmailJS with your User ID
emailjs.init("J3wCSrW9gsPMQWh_1");
export default function ContactMe() {
  const [formData, setFormData] = useState({
    "first-name": "",
    "last-name": "",
    email: "",
    "phone-number": "",
    "choose-topic": "",
    message: "",
    checkbox: false, // Add a checkbox field
  });
  const [isMailSent, setIsMailSent] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle checkbox separately as it has a 'checked' property
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your EmailJS service credentials and template ID
    const serviceID = "service_8fmk8nj";
    const templateID = "template_281s3bp";

    // Create a templateParams object with the form data
    const templateParams = {
      "first-name": formData["first-name"],
      "last-name": formData["last-name"],
      email: formData["email"],
      "phone-number": formData["phone-number"],
      "choose-topic": formData["choose-topic"],
      message: formData.message,
      checkbox: formData.checkbox,
      // Add more fields as needed
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsMailSent(true);

        // Automatically reset isMailSent after 2 seconds
        setTimeout(() => {
          setIsMailSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <section id="contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text"
              name="first-name"
              id="first-name"
              required
              value={formData["first-name"]}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text"
              name="last-name"
              id="last-name"
              required
              value={formData["last-name"]}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text"
              name="email"
              id="email"
              required
              value={formData["email"]}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone-number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
              value={formData["phone-number"]}
              onChange={handleChange}
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="choose-topic"
            value={formData["choose-topic"]}
            onChange={handleChange}
          >
            <option value="">Select One...</option>
            <option value="Regarding Projects and Work">
              Regarding Projects and Work
            </option>
            <option value="Regarding Source-code">Regarding Source-code</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type Your Message..."
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
        {isMailSent && (
          <div>
            <p>Mail sent successfully!</p>
          </div>
        )}
      </form>
    </section>
  );
}
