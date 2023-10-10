// import Navbar from "./components/navbar";
// import Carousela from "./components/carousela.tsx";
import Navbar from "@/scenes/navbar";
import Footer from "./components/footer";
import { useState } from "react";
import SelectedPage from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="app bg-gray20"></div>
      {/* <Carousela />    This did not work, JS Problem */}
      <Footer />
    </>
  );
}

export default App;
