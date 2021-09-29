// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Header from "../components/head/Header.js";
import Hero from "../components/hero/Hero.js";
import Project from "../components/project/Project.js";
import About from "../components/about/About.js";
import Portfolio from "../components/portfolio/Portfolio.js";
import Email from "../components/Email/Email.js";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Project />
      <About />
      <Portfolio />
      <Email />
      <Footer />
    </div>
  );
}
