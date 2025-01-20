import Image from "next/image";
import WhoAmI from "./main/WhoAmI";
import "./main/main.css"
import Nav from "./main/Nav";
import Hamburger from "./main/Hamburger";

export default function Home() {
  return (
    <>
      <Hamburger/>
      <Nav/>
      <section id="whoAmI">
        <WhoAmI/>
      </section>
      <section id="work">

      </section>
      <section id="about">

      </section>
      <section id="contact">

      </section>
    </>
  );
}
