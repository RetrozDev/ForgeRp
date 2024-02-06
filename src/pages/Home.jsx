import Navbar from "../components/Navbar";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "ForgeRp";
      }, [])
  return (
    <div className="Home">
      <Navbar page="home" />
      Hello i&apos;m home page !
    </div>
  );
}

export default Home;
