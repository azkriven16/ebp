"use client";
import Logo from "@/public/logo.svg";
import Github from "@/public/github.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
declare global {
  interface Window {
    my_modal_2: HTMLDialogElement;
  }
}

const closeModal = (): void => {
  const modalElement = document.getElementById(
    "my-modal-4"
  ) as HTMLInputElement | null;
  if (modalElement) {
    modalElement.checked = true;
  }
};

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isScrolled = scrollTop > 0;
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.div
        className="progress-bar w-screen mx-auto"
        style={{ scaleX: scrollYProgress, zIndex: 99999 }}
      />
      <div
        className={`navbar sticky top-0 z-10 max-w-3xl mx-auto ${
          hasScrolled
            ? "bg-base-100 bg-opacity-90 backdrop-blur-lg"
            : "bg-base-100 bg-opacity-50 backdrop-blur-lg"
        }`}
      >
        <div className="navbar-start">
          <button
            className="btn btn-ghost flex sm:hidden"
            onClick={() => window.my_modal_2.showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <ul
                tabIndex={0}
                onClick={closeModal}
                className="menu menu-lg dropdown-content mt-3 p-5 rounded-box flex items-center"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/works">Works</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </form>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <div className="flex gap-1 items-center">
              <img src={Logo.src} className="h-7 w-7" />
              <p className="text-sm tracking-tight hidden sm:inline-block">
                Euger Bonete
              </p>
            </div>
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal tracking-wide hidden sm:flex flex-nowrap">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/works">Works </Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/EugerBonete"
            target="_blank"
            className="btn btn-ghost"
          >
            <img src={Github.src} className="h-6 w-6" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
