import React from "react";
// import NetlifyForm from "react-netlify-form";
// // 
const Contactdemo = () => {
  return (
    // <NetlifyForm name="Contact Form">
    //   {({ loading, error, success }) => (
    //     <div>
    //       {loading && <div>Loading...</div>}
    //       {error && (
    //         <div>Your information was not sent. Please try again later.</div>
    //       )}
    //       {success && <div>Thank you for contacting us!</div>}
    //       {!loading && !success && (
    //         <div>
    //           <input type="text" name="Name" required />
    //           <textarea name="Message" required />
    //           <button>Submit</button>
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </NetlifyForm>
    <form name="email-collection-form" netlify>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default Contactdemo;
