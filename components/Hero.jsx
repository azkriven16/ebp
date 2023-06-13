import React from "react";
import Wallpaper from "@/public/japanese.png";

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="h-full w-full flex justify-end">
        <img src={Wallpaper.src} alt="" className="object-contain" />
      </div>
      <div class="h-full w-1/2 bg-gradient-to-r from-transparent via-base-300/50 to-transparent"></div>

      <div className="hero-content text-start md:mr-80">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Find your favorite anime series and shows
          </h1>
          <p className="py-6">
            Discover a vast collection of anime series and movies. Explore new
            worlds, captivating stories, and unforgettable characters.
          </p>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered shadow-xl"
              />
              <button className="btn btn-square shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
