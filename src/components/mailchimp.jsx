import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Mailchimp({ onValidated, status, message }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <div className="grow my-[auto] flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row relative justify-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          className="h-[60px] grow border-slate-500 border-solid border-2 rounded-xl px-5"
        />
        <span className="sm:absolute sm:right-0  rounded-xl h-[50px] sm:h-full w-auto md:w-[100px] lg:w-[150px] p-1">
          <motion.button
            type="submit"
            whileTap={{ scale: 0.7 }}
            initial={{ scale: 1 }}
            id="newsletter-btn"
            className="rounded-xl h-[50px] sm:h-full w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-[20px]"
          >
            Submit
          </motion.button>
        </span>
      </form>
      {status === "sending" && <div>Sending...</div>}
      {status === "error" && <div>{message}</div>}
      {status === "success" && <div>{message}</div>}
    </div>
  );
}
