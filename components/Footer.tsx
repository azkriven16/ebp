import Logo from "@/public/logo.svg";
import { CgFacebook, CgMail } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-10 items-start md:items-center p-5 mt-20 bg-base-100/50 max-w-3xl mx-auto">
      <div>
        <img src={Logo.src} className="h-14 w-1h-14" />
        <p className="space-y-2">
          Euger Bonete Portfolio
          <br />
        </p>
      </div>

      <div className="space-y-2">
        <span className="footer-title">Navigation</span>
        <div className="grid grid-flow-col gap-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
        </div>
      </div>

      <div className="space-y-2">
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a
            href="mailto:azkriven17@gmail.com?subject=Hello%20from%20website&body=Message%20content%20goes%20here"
            target="_blank"
          >
            <CgMail />
          </a>
          <a href="https://www.facebook.com/euger.bonete.9/" target="_blank">
            <CgFacebook />
          </a>
          <a href="https://www.linkedin.com/in/euger-bonete/" target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
