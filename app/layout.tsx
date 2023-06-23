import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";

const inter = Inter({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Euger Portfolio",
  description: "Frontend React Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto max-w-lg min-h-screen flex flex-col gap-5 px-5 overflow-hidden">
          <div className="absolute top-0 opacity-0" id="home"></div>
          <Hero />
          <Loader />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
