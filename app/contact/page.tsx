"use client";
import React, { FormEvent, useRef, useState } from "react";
import { CgFacebook, CgMail } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null!);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k73iuhd",
        "template_7yqv51p",
        form.current,
        "user_s9kcAcIs0xEN53FZGdHoi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      );
    const target = e.target as HTMLFormElement; // Explicitly type e.target as HTMLFormElement
    target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full gap-2 mb-5">
            <code className="uppercase font-bold">Contact</code>
            <div className="space-y-2">
              <div className="grid grid-flow-col ">
                <a
                  className="btn btn-ghost text-2xl"
                  href="mailto:azkriven17@gmail.com?subject=Hello%20from%20website&body=Message%20content%20goes%20here"
                  target="_blank"
                >
                  <CgMail />
                </a>
                <a
                  className="btn btn-ghost text-2xl"
                  href="https://www.facebook.com/euger.bonete.9/"
                  target="_blank"
                >
                  <CgFacebook />
                </a>
                <a
                  className="btn btn-ghost text-2xl"
                  href="https://www.linkedin.com/in/euger-bonete/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>

          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full placeholder:text-gray-600 focus:outline-none"
            required
            name="name"
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full placeholder:text-gray-600 focus:outline-none"
            required
            name="email"
          />

          <textarea
            placeholder="Message"
            className="textarea textarea-bordered h-48 resize-none placeholder-gray-600 focus:outline-none"
            required
            name="message"
          ></textarea>
          {success && (
            <motion.div
              className="alert alert-success"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your message has been sent!</span>
            </motion.div>
          )}

          {error && (
            <motion.div
              className="alert alert-error"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>An error occurred! Try again later.</span>
            </motion.div>
          )}
          <button className="btn text-white mt-5">send</button>
        </div>
      </div>
    </form>
  );
}
