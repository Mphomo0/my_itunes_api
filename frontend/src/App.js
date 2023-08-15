import './App.css';
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Result from './components/Result'

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/result"  component={<Result />} />
        </Routes>
    </>
  );
}

export default App;
