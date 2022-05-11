import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Login from "../LogIn/Login";
import Movies from "../Movies/Movies";
import Nav from "../NavBar/Nav";
import NotFound from "../NotFound/NotFound";
import People from "../People/People";
import Register from "../Register/Register";
import TvShows from "../TvShows/TvShows";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="tvshows" element={<TvShows />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="people" element={<People />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
