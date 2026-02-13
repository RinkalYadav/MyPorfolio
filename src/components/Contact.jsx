import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_2uh2cfk
    // service_h86i5if
    // XXcfbO6l63Mcs90bP
    emailjs
      .send(
        'service_4hgzdoe',
        'template_yfuny9n',
        {
          from_name: form.name,
          to_name: "Rinkal Yadav",
          from_email: form.email,
          to_email: "rinkalbyadav@gmail.com",
          message: form.message,
        },
        'bChoHH0MqlbQOHTkh'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10`}

    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='xl:w-1/2 w-full bg-black-100 p-8 rounded-2xl'

      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Direct Contact Links */}
<div className="mt-10 flex flex-wrap gap-4">
  <a href="mailto:rinkalbyadav@gmail.com" className="text-blue-400 hover:text-white transition">
    📧 Email
  </a>

  <a href="tel:+919170285408" className="text-green-400 hover:text-white transition">
    📞 Call
  </a>

  <a href="https://wa.me/919170285408" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white transition">
    💬 WhatsApp
  </a>

  <a href="https://www.linkedin.com/in/rinkal-yadav-rby-342534225435342553643/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition">
    🔗 LinkedIn
  </a>

  <a href="https://github.com/RinkalYadav" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
    💻 GitHub
  </a>

  <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition">
    🧑‍💼 Naukri
  </a>

  <a href="https://instagram.com/rinkalbyadav" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
    📸 Instagram
  </a>

  <a href="https://facebook.com/rinkalbyadv/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white transition">
    📘 Facebook
  </a>

  <a href="https://twitter.com/@RinkuY2003" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition">
    🐦 Twitter
  </a>
</div>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
