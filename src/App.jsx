import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import NotFound from "./components/NotFound.jsx";
import { useState, useEffect } from "react";
import "./App.css";



function App() {

  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme: "light";
  });

  

  function getThemeFromLocalStorage(){
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme){
      setTheme(savedTheme);
    }
  }

  function toggleTheme(){
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    })
  }

  useEffect(() => {
    getThemeFromLocalStorage();
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <main className="flex-grow-1 container py-5 mt-5">
        <Routes>
          <Route path="/" element={<Home theme={theme}/>} />
          <Route path="/home" element={<Home theme={theme}/>} />
          <Route path="/about" element={<About theme={theme}/>} />
          <Route path="/projects" element={<Projects theme={theme}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer /> 
    </Router>
  )
}

export default App;
