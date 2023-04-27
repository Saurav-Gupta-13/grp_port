import React, { useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Register } from './models';

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

 

  

  const handlepasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the form data, such as submitting it to a server
    try {
      await DataStore.save(
        new Register({
          "firstName":firstName,
          "lastName":lastName,
         
          "password":password,

        })
      );
      console.log("Registration successful!");
      console.log("First Name: ", firstName);
      console.log("Last Name: ", lastName);
      console.log("Password: ", password);
    } catch (error) {
      console.error("Error saving registration data:", error);
    }
  };

  return (
    <div
      name="register"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline-border-b-4 border-pink-400 text-gray-300">
            Register
          </p>
          <p className="text-gray-300 py-4">
            // Register yourself at our website for further information and more
            benefits
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          placeholder="First Name"
          name="fname"
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />

        <input
          className="my-4 bg-[#ccd6f6] p-2"
          placeholder="Last Name"
          name="lname"
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />

       


        <input
          className="my-4 bg-[#ccd6f6] p-2"
          placeholder="Password"
          name="Password"
          type="password"
          id="password"
          value={password}
          onChange={handlepasswordChange}
          required
        />

        <button
          className="text-white border-2 hover:bg-pink-400 hover:border-pink-400 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
