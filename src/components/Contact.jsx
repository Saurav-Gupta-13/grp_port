import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#21618C] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/62a94b9e-9258-4c14-a2d4-9885783ca9a2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline-border-b-4 border-pink-400 text-gray-300">
            {" "}
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot us an email-
            sauravmgupta13@gmail.com to Collaborate
          </p>
        </div>
        <input
          className="my-4 bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <select name="cars" id="cars" className="my-4 p-2 bg-[#ccd6f6]">
          <option value="App">App Development</option>
          <option value="Web">Web Development</option>
          <option value="VB">VB.NET</option>
          <option value="Cloud">Cloud Management</option>
        </select>
        <textarea
          classname="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-400 hover:border-pink-400 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
