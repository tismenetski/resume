import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'


const Navbar = () => {

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [showLinks,setShowLinks] = useState(false);

  useEffect(()=> {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  const handleScroll = (element) => {

    let div = document.getElementById(element);

    div.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        {/*<img src={logo} alt="logo"/>*/}
        <p>Stas <span>Tismenetski</span></p>
        <button className={"nav-toggle"} onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
      </div>
           <div className='links-container' ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const {id,url,text,element} = link;
            return <li key={id}>
              <a  onClick={()=> handleScroll(element)}>{text}</a>
            </li>
          } )}
        </ul>
      </div>

      <ul className="social-icons">
        {social.map((item) => {
          const{id,url,icon} = item;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
