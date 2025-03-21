import { NavLink } from "react-router-dom";
import '../styles/Header.css';

function Header({ theme, toggleTheme }){
  return(
    <header>
    <a href="/" class="logo">Sahil Tanna</a>
    <nav>
            <a href="/home" class="active">Home</a>
            <a href="/about" class="active">About</a>
            <a href="projects" class="active">Projects</a>
            <a 
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </a>
    </nav>
    <div class="container-box">
        <input type="checkbox" id="sidebar-active"></input>
        <label for="sidebar-active" class="open-sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                fill="#e8eaed">
                <path d="M120-240v-80h720v80h420Zm0-200v-80h720v80h420Zm0-200v-80h720v80h420Z" />
            </svg>
        </label>
        <label for="sidebar-active" id="overlay"></label>
        <div class="mobile-menu">
            <label for="sidebar-active" class="closed-sidebar">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                    fill="#e8eaed">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </label>
            <a href="/home" class="active">Home</a>
            <a href="/about" class="active">About</a>
            <a href="projects" class="active">Projects</a>
            <a 
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </a>
        </div>
    </div>
</header>


)
}

export default Header;