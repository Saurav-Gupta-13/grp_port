import React, { useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Register } from "./models";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  /*const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [erroeMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        navigate("/Home");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };*/

  return (
    <div
      name="login"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="my-4 w-full h-screen bg-[#0a192f] flex-col justify-center items-center p-4">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          WeFreelancer's
        </h1>
        <br />
        <h2 className="text-4xl sm:7xl font-bold text-[#8892b0]">
          TURN YOUR IMAGINATION INTO REALITY.
        </h2>
      </div>
      <div
        //onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline-border-b-4 border-pink-400 text-gray-300">
            Login
          </p>
          <p className="text-gray-300 py-4">// Login to continue.</p>
        </div>

        <input
          className="my-4 bg-[#ccd6f6] p-2"
          placeholder="Mail Id"
          name="Mail"
          type="email"
          id="mail"
          //value={mail}
          //onChange={(event) =>
            //setValues((prev) => ({ ...prev, email: event.target.value }))
          //}
          required
        />

        <input
          className="my-4 bg-[#ccd6f6] p-2"
          placeholder="Password"
          name="Password"
          type="password"
          id="password"
          //value={password}
          //onChange={(event) =>
           // setValues((prev) => ({ ...prev, pass: event.target.value }))
          //}
          required
        />

        <b className="text-1xl sm:text-7xl font-bold text-[#ccd6f6]">
          
        </b>

        <button
          className="text-white border-2 hover:bg-pink-400 hover:border-pink-400 px-4 py-3 my-8 mx-auto flex items-center"
          //onClick={handleSubmission}
        >
          LOGIN
        </button>
        <center>
          <h2 className="text-2xl sm:7xl font-bold text-[#8892b0]">
            Not registered yet? <Link to="/">Register</Link>
          </h2>
        </center>
      </div>
    </div>
  );
}

export default RegisterPage;
