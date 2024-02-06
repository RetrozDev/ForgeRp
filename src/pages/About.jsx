import Navbar from "../components/Navbar";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "ForgeRp | About";
      }, []);
  return (
    <div className="About">
      <Navbar page="about" />
      Hello i&apos;m About page !
    </div>
  );
}

export default About;
