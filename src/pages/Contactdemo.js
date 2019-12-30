import React, { Component } from 'react'

class Contactdemo extends Component {

  render() {

    return (
      <form name="contact" method="post">
      <p>
        <label>Your Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"/></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    )
  }
}

export default Contactdemo
