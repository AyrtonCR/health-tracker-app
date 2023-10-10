// import Navbar from "./components/navbar";
// import Carousela from "./components/carousela.tsx";
import Navbar from "@/scenes/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import SelectedPage from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true), setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="app bg-gray20"></div>
      <Footer />
    </>
  );
}

export default App;
