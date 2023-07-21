import Home from "./Home";
import "./styles.css";
//import DownloadImagem from "./componentes/DownloadImagem";
import ConsultaTodosProdutos from "./componentes/ConsultaTodosProdutos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/produtos" element={<ConsultaTodosProdutos />} />
      </Routes>
    </Router>
  );
};
export default App;
