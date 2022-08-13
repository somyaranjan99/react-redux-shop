import React from 'react'
import {Link} from 'react-router-dom';
const Header=()=>{
    return (<>
    <nav className="navbar navbar-light bg-light">
  <Link className="navbar-brand" to="/">
    <h3>Fake Api</h3>
  </Link>
</nav>
    </>)
}
export default Header;