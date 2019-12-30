import React, { Component } from "react";

class Contactdemo extends Component {
  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" required />
        </div>
        <div>
          <input type="submit" value="Drop a line" />
          <input type="reset" value="Eraser" />
        </div>
      </form>
    );
  }
}

export default Contactdemo;
