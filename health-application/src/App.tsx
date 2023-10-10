// import Navbar from "./components/navbar";
// import Carousela from "./components/carousela.tsx";
import Navbar from "@/scenes/navbar";
import Footer from "./components/footer";
import { Collapse, Dropdown, Ripple, Carousel, initTE } from "tw-elements";
initTE({ Collapse, Dropdown, Ripple, Carousel });

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-green-300">
        <p>shit</p>
      </div>
      {/* <Carousela />    This did not work, JS Problem */}
      <Footer />
    </>
  );
}

export default App;
