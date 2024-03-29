import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const contactDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
  };

  const [details, setDetails] = useState(contactDetails);
  const [btnText, setBtnText] = useState("Send");
  const [status, setStatus] = useState({});

  const { firstName, lastName, email, phoneNo, message } = details;

  const changeDetails = (event) => {
    const { name, value } = event.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    window.alert(status.success === false ? status.message : "success");
  };

  return (
    <>
      <section
        id="contact"
        className="flex flex-col md:flex-row p-[40px] mb-0 lg:mb-[50px] relative z-0"
      >
        <motion.div
          className="flex-shrink p-[40px] hidden md:block"
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        >
          <img src="/contact-img.svg" alt="" className="shrink" />
        </motion.div>
        <div className="flex-shrink p-[40px] md:hidden block">
          <img src="/contact-img.svg" alt="" className="shrink" />
        </div>
        <div className="flex flex-col grow md:p-[40px] gap-[20px] sm:pl-0">
          <h1 className="text-white font-bold leading-[0.8] text-[45px] mb-4">
            Get In Touch
          </h1>
          <form
            action=""
            onSubmit={handleChange}
            className="grid gap-4 sm:grid-cols-1 grid-rows-6 md:grid-cols-2 py-[20px]"
          >
            <input
              type="text"
              name="firstName"
              value={details.firstName}
              onChange={changeDetails}
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={details.lastName}
              onChange={changeDetails}
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={details.email}
              onChange={changeDetails}
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="Email Address"
            />
            <input
              type="number"
              name="phoneNo"
              value={details.phoneNo}
              onChange={changeDetails}
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="Phone No."
            />
            <textarea
              type="text"
              name="message"
              value={details.message}
              onChange={changeDetails}
              className="bg-opacity-10 rounded-lg bg-slate-600 row-span-3 md:col-span-2 border-slate-500 border-solid border-2 px-5 py-7 text-white"
              placeholder="Message"
            />
            <motion.button
              disabled={
                !firstName || !lastName || !email || !phoneNo || !message
              }
              type="submit"
              onClick={() => {
                return setBtnText("Sent");
              }}
              whileTap={{ scale: 0.7 }}
              initial={{ scale: 1 }}
              className="h-[60px] w-[150px] bg-slate-600 rounded-sm text-white font-bold leading-[0.8] text-[20px]"
            >
              {btnText}
            </motion.button>
          </form>
        </div>
      </section>
    </>
  );
}
