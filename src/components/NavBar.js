import { Link } from 'react-scroll'

function NavBar() {
  return (
    <header >
      <h1 className='logo'> BH</h1>
      <nav className='nav'>
        <ul>
          <li><Link className="nav_item" to='home' spy={true} smooth={true}> HOME</Link></li>
          <li><Link className="nav_item"to='about' spy={true} smooth={true}> ABOUT</Link></li>
          <li><Link className="nav_item" to='education' spy={true} smooth={true}> EDUCATION</Link></li>
          <li><Link className="nav_item" to='work' spy={true} smooth={true}> WORK</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
