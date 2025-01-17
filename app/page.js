import Image from "next/image";
import WhoAmI from "./main/WhoAmI";
import "./main/main.css"
import Nav from "./main/Nav";

export default function Home() {
  return (
    <>
      <section id="whoAmI">
        <WhoAmI/>
      </section>
    </>
  );
}
