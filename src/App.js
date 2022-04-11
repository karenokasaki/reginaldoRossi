import About from "./components/About";
import Curiosidades from "./components/Curiosidades";
import RossiDiscografia from "./components/Discografia";
import MaioresSucessos from "./components/MaiorSucesso";
import ReginaldoApp from "./components/ReginaldoApp";
import SobreMorte from "./components/SobreMorte";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <About />
      <Curiosidades />
      <MaioresSucessos />
      <RossiDiscografia />
      <SobreMorte />
      <ReginaldoApp />
      <Footer />
    </div>
  );
}

export default App;
