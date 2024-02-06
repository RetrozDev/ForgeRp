import Navbar from "../components/Navbar";
import { useEffect } from "react";

function Characters() {
    useEffect(() => {
        document.title = "ForgeRp | Characters";
      }, []);
  return (
    <div className="Characters">
      <Navbar page="characters" />
      Hello i&apos;m Characters page !
    </div>
  );
}

export default Characters;
