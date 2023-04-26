import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import Title from "./Title"


function Nav() {

  /* Dark Mode*/
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  };

  useEffect(() => { document.body.className = theme; }, [theme]);
  /* Dark Mode*/

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
      <button className={isNavExpanded ? "hamburger expanded" : "hamburger"} onClick={() => { setIsNavExpanded(!isNavExpanded) }} >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="open"
          viewBox="0 0 20 20"
          fill="#1f6feb"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule=""
          />
        </svg>

        <svg
          fill="#1f6feb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460.775 460.775"
          className="close"
        >

          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" /> </g>
        </svg>

      </button>


      <nav className={isNavExpanded ? "navigation-menu expanded navigation" : "navigation-menu navigation"} >
        <Title></Title>
        <ul>
          <li className="menuItem">
            <a href='/#Home'>Home</a>
          </li>
          <li className="menuItem">
            <a href='/#About'>About</a>
          </li>
          <li className="menuItem">
            <a href='/#Education'>Education</a>
          </li>
          <li className="menuItem">
            <a href='/#Experience'>Experience</a>
          </li>
          <li className="menuItem">
            <a href='/#Skills'>Skills</a>
          </li>
          <li className="menuItem">
            <a href='/#Contact'>Contact</a>
          </li>
          <li className="resume">
            <a href='/assets/cv.pdf' target='_blank'>Resume</a>
          </li>
          <div className="toggleTheme">
            <input type="checkbox" class="checkbox" id="checkbox" />
            <label for="checkbox" class="checkbox-label" onClick={toggleTheme}>

              <span className="ball"></span>
              <FaMoon />
              <FaSun />

            </label>
          </div>
        </ul>

      </nav>


    </>
  )
}

export default Nav