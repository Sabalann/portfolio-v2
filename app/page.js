import Image from "next/image";
import WhoAmI from "./main/WhoAmI";
import "./main/main.css"
import Nav from "./main/Nav";
import Hamburger from "./main/Hamburger";

export default function Home() {
  return (
    <>
      <Hamburger/>
      <section id="whoAmI">
        <WhoAmI/>
      </section>
    </>
  );
}
