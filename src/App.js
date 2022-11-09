
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./scenes/LoginPage";
import AppComponent from "./scenes/pages/AppComponent"
import Team from "./scenes/team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppComponent />} ></Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/InternalControls' element={<Team/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


