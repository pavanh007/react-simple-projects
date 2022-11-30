import React from 'react'

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src=".././public/logo192.png" className="nav-logo" />
        <ul class='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </header>
  );
}