import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-8 object-contain m-1 " />
        <h2 className="flex-1 text-white font-inter font-bold ">Summarizer</h2>

        <button
          type="button"
          onClick={() => window.open("https://github.com/JoeyZ56")}
          className="git_btn mr-2"
        >
          Github
        </button>
        <button
          type="button"
          onClick={() => window.open("https://portfolio.joeyzazzi.com/")}
          className="git_btn"
        >
          Portfolio
        </button>
      </nav>

      <h1 className="head_text">
        Article Summarizer <br className="max-md:hidden" />
        <span className="red_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Tired of long articles? Our summarizer simplifies your reading. Get
        concise, comprehensive summaries for quick understanding. Say goodbye to
        info overload. Try it now for efficient, informed reading.
      </h2>
    </header>
  );
};

export default Hero;
