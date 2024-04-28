import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className = "top-navigation">
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
