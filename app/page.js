import Image from "next/image";
import WhoAmI from "./main/WhoAmI";
import Work from "./main/Work";
import "./main/main.css"
import Nav from "./main/Nav";
import Hamburger from "./main/Hamburger";
import About from "./main/About";
import Contact from "./main/Contact"

export default function Home() {
  return (
    <>
      <Hamburger/>
      <Nav/>
      <section id="whoAmI">
        <WhoAmI/>
      </section>
      <section id="work">
        <Work/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </>
  );
}
